let loginbtn = document.querySelector(".loginbtn");
let username = document.querySelector("#inputid")
let password = document.getElementById("inputpass");
let emailerr = document.querySelector(".emailerr")
let passerr = document.querySelector(".passerr");
let corection = document.querySelector(".correc");
loginbtn.addEventListener("click",function(dels){
    dels.preventDefault()
emailerr.textContent = "";
passerr.textContent = "";
corection.textContent = ""
let isvalid = true;
let emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let emailans = emailRegex.test(username.value);
let passans = passwordRegex.test(password.value);

if(!emailans){
    emailerr.textContent = "Email is incorect"
    emailerr.style.color = "red"
    isvalid = false;
}
if(!passans){
    passerr.textContent = "Password is inccorect"
    passerr.style.color = "red";
    isvalid = false;
}
if (isvalid){
corection.textContent = "Everything Is Correct"
corection.style.color = "green"
username.value = "";
password.value = ""
}



});