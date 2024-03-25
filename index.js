let task=document.getElementById("task");
let taskList=document.querySelector(".task-list");

function addTask() {

    let newTask=task.value;

    if (newTask!="") 
    {
        let li =document.createElement("LI")
        li.innerHTML=newTask;

        let span=document.createElement("SPAN");
        span.innerHTML="X";
        li.appendChild(li);
        taskList.append(li);
        console.log(newTask);
        
    } 
    else
     {
        alert("ENTER A TASK!")
        
    }
    saveData();
    task.value="";
    
}