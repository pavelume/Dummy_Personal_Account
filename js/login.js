//add event on submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //getting email address from email input fild
    const inputEmail = document.getElementById('user-email');
    const inputFildEmail = inputEmail.value;
    console.log(inputFildEmail);
    // getting password and confrim password from email fild

    const inputPass = document.getElementById('user-pass');
    const inputFildPass = inputPass.value;
    console.log(inputFildPass);

    // validation and redirect on another page 

    if(inputFildEmail === 'abc@gmail.com' && inputFildPass ==='123'){
        location.href = 'dashboard.html'
    }
    
    else{
        alert('invalid email password');
    }

})