const form = document.getElementById("form");
const username = document .getElementById("username");
const email = document .getElementById("email");
const password = document .getElementById("password");
const cPassword = document .getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  validateInput();
})

const validateInput = () =>{
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    //------------------------------------------------------ for username 
    if(usernameValue === ""){
        setError(username, 'Username is required.');
    }else{
        setSuccess(username);
    }

    //-------------------------------------------------------- for Email
    if(emailValue === ""){
        setError(email, "Email is required");
    }else if(! isValidEmail(emailValue)){
        setError(email,"Provide a valid email")
    }else{
        setSuccess(email);
    }

    //-------------------------------------------------------- for password
    if (passwordValue === ""){
        setError(password, "Password is required.")
    }else if (passwordValue.length < 8 ){
        setError(password, "Password must be 8 character.")
    }else{
        setSuccess(password);
    }

    //-------------------------------------------------------- for confirm-password
    if(cPasswordValue === ""){
        setError(cPassword, "Please! Confirm your Password");
    }else if(cPasswordValue !== passwordValue){
        setError(cPassword, "Your Confirm-Password is not match with Password")
    }else{
        setSuccess(cPassword)
    }
};

const setError = (element, message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');    
}

function isValidEmail(element){
    var reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;
    return reg.test(element);
}