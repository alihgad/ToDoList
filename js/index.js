let email = document.querySelector("#email"),
    password = document.querySelector("#password"),
    loginbtn = document.getElementById("login"),
    users = JSON.parse(localStorage.getItem("users"))

console.log(users);
function login(){

    if (!users) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: " there is no data",
            footer : `please <a href="signup.html">sign up</a>`
        });
    }

    for (let i = 0; i < users.length; i++) {

        

        if (users[i].email == email.value){
            if(users[i].password == password.value){
            localStorage.setItem("loginIndex",JSON.stringify(i))
            loginbtn.setAttribute("href","home.html")
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "password is incorrect",
                });
            }
        } else{
            document.getElementById("emailHelp").classList.replace("opacity-0","opacity-100")
            
        }
    }
}


loginbtn.addEventListener("click" ,() => {
    login()
})


function checkEmail(){
    let check = false
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email.value){
            email.classList.replace("is-invalid","is-valid")

            check = true

        }
    }

    if(!check){
    email.classList.add("is-invalid")
    document.getElementById("emailHelp").classList.replace("opacity-100","opacity-0")

    }

    if(!email.value){
    email.classList.remove("is-invalid")
    email.classList.remove("is-valid")
    document.getElementById("emailHelp").classList.replace("opacity-100","opacity-0")

    }
}

email.addEventListener("input",()=>{
    checkEmail()
});


document.querySelector("#toogle").addEventListener("click",function(e){
    if(document.querySelector("#password").getAttribute("type") == 'password'){
        document.querySelector("#password").setAttribute("type","text")
        e.target.classList.replace("fa-eye","fa-eye-slash")
    }else{
        document.querySelector("#password").setAttribute("type","password")
    }
})













