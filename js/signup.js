"use strict";
let userName = document.querySelector("#userName"),
    upemail = document.querySelector("#email"),
    uppassword = document.querySelector("#password"),
    signup = document.querySelector("#signup"),
    users ;
    
    if(JSON.parse(localStorage.getItem("users"))){
        users = JSON.parse(localStorage.getItem("users"))
    }else{
        users = []
    }
    console.log(users);

function userNAmeValidate() {

    let regx = /^[a-z\s\d]{5,12}$/gmi
    let warningMessege = document.getElementById("userNameHelp")


    
    if (regx.test(userName.value)){
        warningMessege.classList.replace("opacity-100","opacity-0")
        userName.classList.replace("is-invalid", "is-valid")
        return true
    }else{
        warningMessege.classList.replace("opacity-0","opacity-100")
        userName.classList.add("is-invalid")
    }
    if (!userName.value) {
        userName.classList.remove("is-invalid")
        userName.classList.remove("is-valid")
        warningMessege.classList.replace("opacity-100", "opacity-0")
    }


    
}

userName.addEventListener("input",()=>{
    userNAmeValidate();
})






function emailValidate() {
    let emailHelp = document.getElementById("emailHelp")
    var regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig;



    if (regx.test(upemail.value) && unique()) {
        upemail.classList.replace("is-invalid", "is-valid")
        emailHelp.classList.replace("opacity-100", "opacity-0")
        return true;
    } else {
        emailHelp.classList.replace("opacity-0", "opacity-100")
        upemail.classList.add("is-invalid")
        document.getElementById("emailtext").innerText= "Invalid Email"
        if(unique() == false)
        document.getElementById("emailtext").innerText= "email is alerdy exist"
    }

    if (!upemail.value) {
        upemail.classList.remove("is-invalid")
        upemail.classList.remove("is-valid")
        emailHelp.classList.replace("opacity-100", "opacity-0")
    }

}

upemail.addEventListener("input",()=>{
    emailValidate();
})




function passwordValidate() {
    var regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/ig
    let helppassword = document.querySelector("#passwordHelp")
    if (regx.test(uppassword.value)) {
        uppassword.classList.replace("is-invalid", "is-valid")
        helppassword.classList.replace("opacity-100", "opacity-0")
        return true;
    } else {
        helppassword.classList.replace("opacity-0", "opacity-100")
        uppassword.classList.add("is-invalid")
    }

    if (!uppassword.value) {
        uppassword.classList.remove("is-invalid")
        uppassword.classList.remove("is-valid")
        helppassword.classList.replace("opacity-100", "opacity-0")
    }

}

uppassword.addEventListener("input",()=>{
    passwordValidate();
})

function unique(){
    let unique = true
    for(let i =0 ; i<users.length;i++){
        if(users[i].email == upemail.value ){
            unique = false
        }
    }
    return unique
}


function sign(){

    if(userNAmeValidate()  && emailValidate() && passwordValidate() && unique() ){

    let user = {
        name : userName.value,
        email :upemail.value,
        password :  uppassword.value,
        tasks : []
    }

    users.push(user)

    localStorage.setItem("users",JSON.stringify(users))
    if (window.location.pathname == "/ToDoList/signup.html") {
        window.location.pathname = "/ToDoList/index.html"
    }else{
        window.location.pathname = "index.html"
    }
        
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: " Wrong data",
            footer : `please check your data again`,
            showCloseButton: true
        });
    }

    

}  


signup.addEventListener("click", (e)=>{
    sign()
})


document.querySelector("#toogle").addEventListener("click",function(e){
    if(document.querySelector("#password").getAttribute("type") == 'password'){
        document.querySelector("#password").setAttribute("type","text")
        e.target.classList.replace("fa-eye","fa-eye-slash")
    }else{
        document.querySelector("#password").setAttribute("type","password")
        e.target.classList.replace("fa-eye-slash","fa-eye")

    }
})

document.addEventListener("keypress",function(e){
    if(e.key == 'Enter'){
        e.preventDefault()
        sign()
    };
})



