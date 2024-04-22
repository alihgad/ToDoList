<<<<<<< HEAD
let loginIndex = JSON.parse(localStorage.getItem("loginIndex")),
    users = JSON.parse(localStorage.getItem("users")),
    task = document.querySelector("#task"),
    deadline = document.querySelector("#deadLine"),
    done = document.getElementById("done")

    if (loginIndex == null) {

        document.getElementById("content").innerHTML= `<h1>Please <a href="index.html" cl> login </a> first</h1>`
        document.getElementById("action").innerText = `Log in`
            
    }else{
        document.getElementById("name").innerText= users[loginIndex].name
    }



    if(users[loginIndex].tasks.length > 0){
        displayTasks(users[loginIndex].tasks)
    }


    function displayTasks(arr){
        let cartona = ""
        for(let i =0 ; i<arr.length;i++){

            let now = (new Date())
            let time = (new Date(arr[i].deadline))
            let deff = time - now
            let days = Math.floor(deff/1000/60/60/24)
            let hours = Math.floor(deff/1000/60/60-days*24)
            let minutes = Math.floor(deff/1000/60-hours*60-days*24*60)
             cartona += `<tr>
            <td>${arr[i].task}</td>
            <td>${days} days ${hours} hours and ${minutes} minutes </td>
            <td><div class="btn btn-success" onclick = "deleteing(${i})">Done <i class="fa-solid fa-check-square fa-xl"></i></div></td>
          </tr>
            `
            console.log(minutes);
        }
    



       

        document.getElementById("tbody").innerHTML = cartona

    }



       




    function addTask(){
        if(!task.value){
            Swal.fire({
                icon: "error",
                title: "Empty Task",
            });
            return 0;
        }
        let now = new Date() 
        let time = new Date(deadline.value)
        if(time > now){
               let newTask = {
                task :  task.value,
                deadline : deadline.value
            }
        users[loginIndex].tasks.push(newTask)

        localStorage.setItem("users",JSON.stringify(users))

        displayTasks(users[loginIndex].tasks)

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong date",
        });
    }
}


function clear(){
    task.value=""
    deadline.value = ""
}

    document.getElementById("add").addEventListener("click",function (){
        addTask()
        clear()
    })

function deleteing(index){
    users[loginIndex].tasks.splice(index,1)
    localStorage.setItem("users",JSON.stringify(users))
    displayTasks(users[loginIndex].tasks)
}
=======
let loginIndex = JSON.parse(localStorage.getItem("loginIndex")),
    users = JSON.parse(localStorage.getItem("users")),
    task = document.querySelector("#task"),
    deadline = document.querySelector("#deadLine"),
    done = document.getElementById("done")

    if (loginIndex == null) {

        document.getElementById("content").innerHTML= `<h1>Please <a href="index.html" cl> login </a> first</h1>`
        document.getElementById("action").innerText = `Log in`
            
    }else{
        document.getElementById("name").innerText= users[loginIndex].name
    }



    if(users[loginIndex].tasks.length > 0){
        displayTasks(users[loginIndex].tasks)
    }


    function displayTasks(arr){
        let cartona = ""
        for(let i =0 ; i<arr.length;i++){

            let now = (new Date())
            let time = (new Date(arr[i].deadline))
            let days = Math.floor((time-now)/60000/60/24)
            let hours = Math.floor((time-now)/60000/60 - days *24 )
            let munites = Math.floor((time-now)/60000 - days *24 *60 -hours *60) 
             cartona += `<tr>
            <td>${arr[i].task}</td>
            <td>${days} days ${hours} hours and ${munites} munites </td>
            <td><div class="btn btn-success" onclick = "deleteing(${i})">Done <i class="fa-solid fa-check-square fa-xl"></i></div></td>
          </tr>
            `
        }

        document.getElementById("tbody").innerHTML = cartona

    }

    
    let now = new Date() 



    function addTask(){
        if(!task.value){
            Swal.fire({
                icon: "error",
                title: "Empty Task",
            });
            return 0;
        }
        let now = new Date() 
        let time = new Date(deadline.value)
        if(time > now){
               let newTask = {
                task :  task.value,
                deadline : deadline.value
            }
        users[loginIndex].tasks.push(newTask)

        localStorage.setItem("users",JSON.stringify(users))

        displayTasks(users[loginIndex].tasks)

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong date",
        });
    }
}


function clear(){
    task.value=""
    deadline.value = ""
}

    document.getElementById("add").addEventListener("click",function (){
        addTask()
        clear()
    })

function deleteing(index){
    users[loginIndex].tasks.splice(index,1)
    localStorage.setItem("users",JSON.stringify(users))
    displayTasks(users[loginIndex].tasks)
}
>>>>>>> d1d4a622978933f461450e169c904378c340cd4c
