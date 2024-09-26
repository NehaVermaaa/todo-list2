const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let doneButton = document.createElement("button");
        doneButton.innerText = "Done";
        doneButton.className = "done-btn";
        let delButton = document.createElement("button");
        delButton.innerText = "Del";
        delButton.className = "del-btn";
        li.appendChild(doneButton);
        li.appendChild(delButton);
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("done-btn")) {
        e.target.parentElement.classList.toggle("checked");
        saveData();
    } else if (e.target.classList.contains("del-btn")) {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

function resetTasks() {
    localStorage.removeItem("data");
    listContainer.innerHTML = "";
}

showTask();
