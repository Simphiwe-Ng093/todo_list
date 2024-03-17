//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//Event listeners

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);

//Functions

function addTodo(event){
    //prevent form from submitting
   
    event.preventDefault();
    //todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);


    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

     //append to list
     todoList.appendChild(todoDiv);

     //clear todo input
     todoInput.value = "";
}

function deleteCheck(e){
   const item = e.target;
   //delete todo
   if(item.classList[0]==="trash-btn"){
       const todo = item.parentElement;
       //animation
       todo.classList.add("fall");
       todo.addEventListener('transitionend', function(){
       todo.remove();
      });
       
   }
   //check mark
   if(item.classList[0]==="complete-btn"){
      const todo = item.parentElement;
      todo.classList.toggle("completed");
   }
}
function displayTime(){
   let dateTime = new Date;
   let hrs = dateTime.getHours();
   var min = dateTime.getMinutes();
   var sec = dateTime.getSeconds();
   let day = dateTime.getDay();
   var session = document.getElementById('session');
   if(hrs >=12){
      document.getElementById("session").innerHTML ="PM";
   }
   else{
      document.getElementById("session").innerHTML ="AM";
   }
   document.getElementById("hours").innerHTML = hrs;
   document.getElementById("minutes").innerHTML = min;
   document.getElementById("seconds").innerHTML =sec;
   switch(day){
      case 0:
         document.getElementById("day").innerHTML = "Sunday";
         break; 
      case 1:
         document.getElementById("day").innerHTML = "Monday";
         break;
      case 2:
         document.getElementById("day").innerHTML = "Tuesday";
         break;
      case 3:
         document.getElementById("day").innerHTML = "Wednesday";
         break;
      case 4:
       document.getElementById("day").innerHTML = "Thursday";
       break;
      case 5:
         document.getElementById("day").innerHTML = "Friday";
         break;
      case 6:
         document.getElementById("day").innerHTML = "Saturday";
         break;

   }
   

}
setInterval(displayTime, 10);
