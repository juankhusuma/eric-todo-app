const todoListItem = []
const todoList = document.getElementById("todo-list")

todoListItem.forEach(todo => {
  const todoItem = document.createElement("li")
  todoItem.innerHTML = todo
  todoList.appendChild(todoItem)
})

const todoForm = document.getElementById("todo-form")
const todoInput = document.getElementById("todo-input")


let userInput = ""
todoInput.addEventListener("change", (event) => {
  userInput = event.target.value
})
todoForm.addEventListener("submit", (event) => {
  event.preventDefault()
  todoListItem.push(userInput)
  const todoItem = document.createElement("li")
  todoItem.innerHTML = userInput
  todoList.appendChild(todoItem)
})