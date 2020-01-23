const todoForm = document.querySelector("#todo_form");
const todoList = document.querySelector("#task_list");
let db;

const TODO = {
  DB: "todo_DB",
  OS: "todo_os"
};
const DB_VERSION = 1;

window.onload = function() {
  let request = window.indexedDB.open(TODO.DB, DB_VERSION);
  todoForm.onsubmit = addData;
  console.dir(todoForm);

  request.onerror = function() {
    console.log("Database failed to open");
  };

  request.onsuccess = function() {
    console.log("Database opened succesfully");

    db = request.result;

    displayData();
  };

  request.onupgradeneeded = function(e) {
    let db = e.target.result;

    let todoStore = db.createObjectStore(TODO.OS, {
      keyPath: "id",
      autoIncrement: true
    });

    todoStore.createIndex("title", "title", { unique: false });
    todoStore.createIndex("body", "body", { unique: false });

    console.log("Database setup complete");
  };

  function addData(e) {
    e.preventDefault();

    let newItem = {
      title: todoForm.title.value.trim(),
      body: todoForm.body.value.trim()
    };

    console.log("Debug DB", db);

    if (!db || !(newItem.title && newItem.body)) return;

    let transaction = db.transaction([TODO.OS], "readwrite");

    let todoStore = transaction.objectStore(TODO.OS);

    let request = todoStore.add(newItem);

    request.onsuccess = function() {
      console.log("Request ended succesfully");

      todoForm.title.value = "";
      todoForm.body.value = "";
    };

    transaction.oncomplete = function() {
      console.log("Transaction completed: database modification finished");
      displayData();
    };

    transaction.onerror = function() {
      console.log("Transaction not opened due to error");
    };
  }

  function displayData() {
    let todoStore = db.transaction(TODO.OS).objectStore(TODO.OS);

    todoList.innerHTML = "";

    todoStore.openCursor().onsuccess = function(e) {
      let cursor = e.target.result;

      if (cursor) {
        console.log("Cursor", cursor.value);

        renderTask(cursor.value);

        cursor.continue();
      } else {
        console.log("Not found");
        renderNotStored();
      }
    };
  }

  function renderTask(task) {
    const liElement = document.createElement("li");
    const titleElement = document.createElement("h3");
    const bodyElement = document.createElement("p");
    const deleteBtn = document.createElement("button");

    titleElement.textContent = task.title;
    bodyElement.textContent = task.body;

    liElement.appendChild(titleElement);
    liElement.appendChild(bodyElement);

    todoList.appendChild(liElement);

    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = deleteTodo;
    deleteBtn.dataset.id = task.id;
    deleteBtn.classList = ["button"];

    liElement.appendChild(deleteBtn);
  }

  function deleteTodo(e) {
    const nodeId = parseInt(e.target.dataset.id);

    const transaction = db.transaction([TODO.OS], "readwrite");
    const todoStore = transaction.objectStore(TODO.OS);
    const request = todoStore.delete(nodeId);

    transaction.oncomplete = function() {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);

      renderNotStored();
      alert(`Todo ${nodeId} was deleted succesfully`);
    };

    request.onsuccess = function() {};
  }

  function renderNotStored() {
    if (!todoList.firstChild) {
      const listItem = document.createElement("li");
      listItem.textContent = "Todos not stored";
      todoList.appendChild(listItem);
    }
  }
};
