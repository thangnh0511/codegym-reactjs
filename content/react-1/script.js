function validEmail(str) {
    Regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(str.match(Regexp)) {
        return true; 
    } else {return false;}
}

function validAccount(str) {
    Regexp = /^[_a-z0-9]{6,}$/;
    if(str.match(Regexp)) {
        return true; 
    } else {return false;}
}

function checkEmail() {
    let text = document.getElementById('email').value;
    if(validEmail(text)){
        alert("Correct Email !");
    } else {
        alert("Opp!!! not Email");
    }
}

function checkAccount() {
    let text = document.getElementById('account').value;
    if(validAccount(text)){
        alert("Correct Account !");
    } else {
        alert("Opp!!! Something wrong");
    }
}