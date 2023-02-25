function submitUserForm() {
    var response = grecaptcha.getResponse();
    
    if(response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;"> Ths Field is required.</span>';
        return false;
    }
    return true;
}

function verifyCaptcha() {
    document.getElementById('g-recaptcha-error').innerHTML='';
}

function captcha() {
    var response= grecaptcha.getResponse();
    if(response.length == 0){
        alert=("enter captcha");
    }
    else{
        alert=("verified");
    }
}