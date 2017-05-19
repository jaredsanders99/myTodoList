
var handleForm = function (event) {
    event.preventDefault();
    var input = document.getElementById('newTaskId').value;
    addToList(input, 'taskList');
}

var createCheckbox = function (value) {
    var textInput = document.createElement('input');
    var count = countElements('taskList', 'LI')
    textInput.setAttribute('type', 'checkbox');
    textInput.setAttribute('name', 'checklist')
    textInput.setAttribute('value', value);
    textInput.setAttribute('id', 'todo[' + count + ']');
    return textInput;
}

var countElements = function (id, nodeName){
    var el = document.getElementById(id);
    var nodes = 0;
    for (var i = 0; i < el.childNodes.length; i++) {
        if (el.childNodes[i].nodeName == nodeName) {
            nodes++;
        }
    }
    return nodes + 1;
}

var createlabel = function (id) {
    var label = document.createElement('label');
    label.setAttribute('for', id);
    return label;
}

var addToList = function (value, listId) {
    // need to find element
    var ol = document.getElementById(listId);
    // create li element
    var li = document.createElement('li');
    // create text node
    var todo = document.createTextNode(' ' + ' ' + value);
    // create a checkbox element
    // Add attributes to checkbox
    // append the check box to li before todo list
    var count = countElements('taskList', 'LI')
    var label = createlabel('todo[' + count + ']');
    var checkbox = createCheckbox(value);
    li.appendChild(checkbox);
    // Label
    // append the todo to the li element
    label.appendChild(todo);
    // append the li element to the list
    li.appendChild(label);
    ol.appendChild(li);
}

var form = document.getElementById('todoForm');
if (form.attachEvent) {
    
    form.attachEvent('submit', handleForm);
} else {
    
    form.addEventListener('submit', handleForm);
}