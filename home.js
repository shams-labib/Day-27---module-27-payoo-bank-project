document.getElementById('add-btn').addEventListener('click', function(e){
    e.preventDefault()
    const addSelect = document.getElementById('add-select').value
    const addAcount = document.getElementById('add-acount').value
    const addAmountParseInt = parseInt(document.getElementById('add-amount').value)
    const addPin = document.getElementById('add-pin').value
    const addPinParseInt = parseInt(addPin);

    // console.log(addSelect, addAcount, addAmountParseInt, addPinParseInt);

    const available = parseInt(document.getElementById('available-balance').innerText)

    // acount number 11 digit verify
    if(addAcount.length < 11){
      alert('Please add valid acount number')
      return;
    }
    // pin number varify
    if(addPinParseInt !== 1234){
      alert('Wrong pin')
      return;
    }
     
    // balance add

    const balanceAdd = available + addAmountParseInt;
    document.getElementById('available-balance').innerText = balanceAdd;
});



// cashout section work
document.getElementById('cash').addEventListener('click', function(c){
  c.preventDefault();
   const cashAcount = document.getElementById('cash-acount').value
   const cashAmount = parseInt(document.getElementById('cash-amount').value)
   const cashPin =  parseInt(document.getElementById('cash-pin').value)
   const available = parseInt(document.getElementById('available-balance').innerText)

   if(cashAcount.length < 11){
    alert('Inavlid acount number')
    return;
   }
  //  pin Number check
   if(cashPin !== 1234){
    alert('Wrong pin');
    return;
   }

// cash out sub works
const cashoutSection = available - cashAmount;
document.getElementById('available-balance').innerText = cashoutSection;




})



// cashout and add money btn work 

document.getElementById('add-money-btn').addEventListener('click', function(){
     document.getElementById('cashoutId').style.display = 'none';
     document.getElementById('addmoneyId').style.display = 'block';
});
document.getElementById('cashout-btn').addEventListener('click', function(){
     document.getElementById('addmoneyId').style.display = 'none';
      document.getElementById('cashoutId').style.display = 'block';
});