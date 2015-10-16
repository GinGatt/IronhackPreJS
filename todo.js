window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var toDoItem = document.createElement('li');
    var toDoList = document.querySelector('.todo-list-items');
    var inputBox = document.getElementById('todo-input');
    toDoItem.textContent = inputBox.value;
    toDoList.appendChild(toDoItem);
    inputBox.value = '';
  }

  function markAsDone() {
    var toDoList = document.querySelector('.todo-list-items');
    var finishedItem = toDoList.querySelector('li');
    console.log(finishedItem);
    var doneList = document.querySelector('.done');
    doneList.appendChild(finishedItem);
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
    //need to add check for no more exists 
  }
  
}

