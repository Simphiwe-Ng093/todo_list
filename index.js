//selectors
//localStorage.clear()
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//Event listeners
document.addEventListener("DOMContentLoaded",getTodos);
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
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    saveLocalTodos(todoInput.value);

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
       removalLocalTodos(todo);
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
   function padZero(number) {
      return number < 10 ? '0' + number : number.toString();
    }
   var session = document.getElementById('session');
   if(hrs >=12){
      document.getElementById("session").innerHTML ="PM";
   }
   else{
      document.getElementById("session").innerHTML ="AM";
   }
   document.getElementById("hours").innerHTML = padZero(hrs);
   document.getElementById("minutes").innerHTML = padZero(min);
   document.getElementById("seconds").innerHTML = padZero(sec);
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
// filter function


function saveLocalTodos(todo){
    //check 
    let todos;
    if(localStorage.getItem("todos")==null){
      todos =[];
    }
    else{
      todos =JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos(){
   let todos;
   if(localStorage.getItem("todos")==null){
     todos =[];
   }
   else{
     todos =JSON.parse(localStorage.getItem("todos"));
   }
   todos.forEach(function(todo){
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
      //Create Li
      const newTodo = document.createElement("li");
      newTodo.innerText = todo;
      newTodo.classList.add("todo-item");
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
   });

   
}
function removalLocalTodos(todo){
   let todos;
   if(localStorage.getItem("todos")==null){
     todos =[];
   }
   else{
     todos =JSON.parse(localStorage.getItem("todos"));
   }
   const todoIndex = todo.children[0].innerText;
   todos.splice(todos.indexOf(todoIndex), 1);
   localStorage.setItem("todos",JSON.stringify(todos));
}
