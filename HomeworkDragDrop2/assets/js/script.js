const form = document.querySelector("form");
const todoListBox = document.querySelector(".todo-list-box");
const input = document.querySelector(".form-control");
const dragInput= document.querySelectorAll(".drag-box");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim().length === 0) {
    alert("error!");
  } else {
    const todoListItems = Array.from(
      document.querySelectorAll(".todo-list-item span")
    );
    if (!todoListItems.find((x) => x.textContent === input.value)) {
      todoListBox.innerHTML += `
                <div class="todo-list-item" draggable="true">
                    <span>${input.value}</span>
                    <button class="btn remove-btn">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
              `;
    } else {
      alert("error!!");
    }

    const removeBtn = document.querySelectorAll(".remove-btn");

    removeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
      });
    });
  }
});
todoListBox.forEach(todolistbox=>{
    todolistbox.ondragstart=function(e){
        e.dataTransfer.setData("id", this.id)
    }
})

dragInput.ondragover=function(e){
    e.preventDefault();
}

dragInput.ondrop=function(e){
    let id= e.dataTransfer.getData("id");
    let table=document.getElementById(id);
    dragInput.appendChild(table);
}
