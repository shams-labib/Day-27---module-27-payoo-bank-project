// function er maddome code clean and choto korar jonno ekta function banay setai sob gulate use kora jay, niche tar demo version dekhano hlo

// function section

function mainField(id){
  const value = document.getElementById(id);
  const valueAdd = value.value;
  const valueParse = parseInt(valueAdd);
  return valueParse;
}


// function toggle by card section 

function handleSection(id){
  const forms = document.getElementsByClassName('form');
  for(const form of forms){
    form.style.display = 'none'
  }
  document.getElementById(id).style.display = 'block'
}

// Form work section


// add section work
document.getElementById('add-btn').addEventListener('click', function(e){
    e.preventDefault()
    const addSelect = document.getElementById('add-select').value
    const addAcount = document.getElementById('add-acount').value
    const addAmountParseInt = mainField('add-amount')
    const addPin = mainField('add-pin')

    // console.log(addSelect, addAcount, addAmountParseInt, addPinParseInt);

    const available = parseInt(document.getElementById('available-balance').innerText)

    // acount number 11 digit verify
    if(addAcount.length < 11){
      alert('Please add valid acount number')
      return;
    }
    // pin number varify
    if(addPin !== 1234){
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


// transfer section work.

document.getElementById('transfer').addEventListener('click', function(t){
  t.preventDefault();
  const transferAcount = document.getElementById('transfer-acount').value
  const transferAmount = document.getElementById('transfer-amount').value
  const transferAmountInt = parseInt(transferAmount);
  const transferPin = document.getElementById('transfer-pin').value
  const transferPinInt = parseInt(transferPin)
  const available = parseInt(document.getElementById('available-balance').innerText)

  if(transferAcount.length < 11){
    alert('Invalid acount number')
    return;
  }
  if(available < transferAmountInt ){
    alert('Balace short')
    return;
  }
  if(transferPinInt !== 1234){
    alert('Invalid pin');
  }

  // transfer money work
  const transfer = available - transferAmountInt;
  document.getElementById('available-balance').innerText = transfer;
  

})

// get bonus section
document.getElementById("get-bonus").addEventListener('click', function(g){
  g.preventDefault()
  const getInput = mainField("get-acount")
  const available = parseInt(document.getElementById('available-balance').innerText)
  if(getInput === 2222 ){
    const totalBonus = available + 5000;
    document.getElementById('available-balance').innerText = totalBonus;
  }
  else (
    alert('Invalid copon')
  )
  
})

// pay bill section work
document.getElementById("pay-btn").addEventListener('click', function(p){
   p.preventDefault()
   const payAcount = document.getElementById('pay-acount').value;
   const payAmount = mainField('pay-amount');
   const available = parseInt(document.getElementById('available-balance').innerText)
   const payPin = mainField("pay-pin")
  
   
   if(payAcount.length < 11){
    alert('Invalid Acount number')
    return;
   }
   if(payPin !== 1234){
    alert('Invalid Pin')
    return;
   }

  const total = available - payAmount;
  document.getElementById('available-balance').innerText = total;
   
})


// Next Button section


// cashout and add money btn work 

document.getElementById('add-money-btn').addEventListener('click', function(){
     handleSection('addmoneyId')

});
document.getElementById('cashout-btn').addEventListener('click', function(){
     handleSection('cashoutId')
});

// transfer money section
document.getElementById('transfer-btn').addEventListener('click', function(){
    handleSection('transfer-section')
});

// Get Bounes
document.getElementById('get-btn').addEventListener('click', function(){
  handleSection('get-section')
})

// pay section

document.getElementById("paybill-btn").addEventListener('click', function(){
  handleSection('paybill-section');
})


