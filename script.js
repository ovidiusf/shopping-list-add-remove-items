
//define the input variables
var input = document.getElementById("userinput");
var enterButton = document.getElementById("enter");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var h1 = document.querySelector("h1");


//all the functions used
function changeHeaderStyle() {
    h1.className = "coolTitle";
}

function inputLength() {
    return input.value.length;
}


//creates a new list element together with a delete button next to it
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete!"));
    li.appendChild(deleteButton);
    deleteButton.onclick = removeParent;
}

function addToListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addToListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


//gets the value of the event if available or if not, assume it's IE and use the 
//the right operator on the OR
function getEventTarget(event) {
    event = event || window.event;
    return event.target;
    //non-standard way to obtain the target event from IE
    // || event.srcElement;
}

//testing
// function listEvent() {
//     for (var i = 0; i < listItems.length; i++) {
//         listItems[i].addEventListener("click", toggleDone);
//     }
// }
// function toggleDone(event) {
//     event = event || window.event;
//     event.target.classList.toggle("done");
// }
// listEvent();


//adds the done class to the child items of UL
ul.onclick = function (event) {
    var target = getEventTarget(event);
    target.classList.toggle("done");
}

function listLength() {
    return listItems.length;
}

//removes the parent of the selected item
function removeParent(event) {
    event.target.parentNode.remove();
}

//creates a delete button for all present items
function deleteButton() {
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete!"));
    listItems[i].appendChild(deleteButton);
    deleteButton.onclick = removeParent;
}

changeHeaderStyle();

enterButton.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);

for (i = 0; i < listLength(); i++) {
    deleteButton();
}

