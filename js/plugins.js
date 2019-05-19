/// form object

var container = document.querySelector(".taskApplication");
var header = document.querySelector(".header");
var forq = document.querySelector("form");

window.onload = function () {
  container.classList = "bounceInDown animated delay-1s";
  header.classList += "animated";
  forq.classList.add("bounceInRight", "delay-2s", "animated");
};

var form = {
  taskInput: document.querySelector("#taskInput"),
  addTask: document.querySelector("#addTaskBtn"),
  removeTsk: document.querySelector("#deleteBtn"),
  listContainer: document.querySelector(".olTaskList"),
  preventSubmit: document.querySelectorAll("input[type='submit']"),
  delIcon: document.querySelectorAll("#del-item")
};

function formAddTask() {
  // creating varabiles

  form.addTask.addEventListener("click", function () {
    var li = document.createElement("li");
    var input = document.createElement("input");
    var span = document.createElement("span");
    var icon = document.createElement("i");

    // put attributes
    li.classList = "list-group-item list-group-item-action";
    input.className = "checker mr-2";
    input.type = "checkbox";
    span.className = "taskItem mr-2";
    icon.classList = "d-inline-block del-item fa fa-trash delIcon";
    icon.setAttribute("title", "Remove");
    icon.setAttribute("onclick", "deletingItems(this.parentNode)");
    span.textContent = form.taskInput.value;

    // handle classes adding
    var customvar = document.querySelectorAll(".del-item");
    customvar.forEach(function (element) {
      if (customvar.length > 0) {
        if (element.classList !== "delIcon") {
          element.classList.add("delIcon");
        }
      }
    });

    // append childs
    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(icon);

    // append their father
    let rsltError = document.querySelector(".errorsMessage .lead");
    let taskF = form.taskInput;
    let tfws = taskF.value;
    let tfwsf = tfws.trimLeft();
    if (tfwsf === "") {
      rsltError.classList.add("fadeInDown", "animated");
      rsltError.textContent = "Please Insert A Valid Task";
    } else {
      form.listContainer.appendChild(li);
    }
    // handle reslt error content
    taskF.addEventListener("input", function () {
      rsltError.textContent = "";
    });
    //  remove value of taskinput after adding a item
    let infield = form.taskInput;
    if (infield.value) {
      infield.value = "";
    }
  });
} // end of adding elements to the task list

// prevent null tasks

function removeTasks() {
  form.removeTsk.addEventListener("click", function () {
    let icons = document.querySelectorAll(".del-item");
    $(icons).toggleClass("delIcon");
  });

  // end of selecting elements icons
}

formAddTask();
removeTasks();

function deletingItems(father) {
  father.remove(father);
}

function removeTextInField() {
  let cursX = document.querySelector(".removeText");
  let field = form.taskInput;
  cursX.addEventListener("click", function () {
    if (field.value) {
      field.value = "";
    }
  });
}

removeTextInField();
