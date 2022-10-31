fetch('./data.json')
.then(response =>{
    return response.json()
})
.then(data =>{
   let days =  document.querySelectorAll('.day');
   let balances = document.querySelectorAll('.hiddenBalance');
   let amounts = document.querySelectorAll('.amount');
   let i = 0 ;
   let j = 0 ;
   let x =0 ;
   days.forEach(day =>{
    day.innerHTML = data[i].day;
    i++;
   });
   balances.forEach(balance =>{
    balance.innerHTML = '$' + data[j].amount; 
    j++;
   });
   amounts.forEach(amount =>{
    amount.style.height =  2*data[x].amount+'px' ;
    amount.addEventListener('mouseover' , ()=>{
        amount.parentNode.firstElementChild.style.display= 'block'
    });
    amount.addEventListener('mouseout' , ()=>{
        amount.parentNode.firstElementChild.style.display= 'none'
    });
    
    x++
   })
   
})
.catch(err => {
    alert(err)
})