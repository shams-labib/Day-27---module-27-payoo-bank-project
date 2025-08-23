// Recap the button section js

document.getElementById('loginBtn').addEventListener('click', function(e){
  e.preventDefault()
   const saveMobile = 1234567;
   const savePass = 1234;
   const mobile = document.getElementById('mobile').value;
   const pass = document.getElementById('pin').value;
   const mobileValue = parseInt(mobile);
   const passValue = parseInt(pass);

   if(mobileValue === saveMobile && passValue === savePass){
    window.location.href = './home.html'
   }
   else {
    alert('Invalid pin or pass')
   }
});

// cashout and add section work