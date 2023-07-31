
function addTask(taskName) {
    const taskList = $('#taskList');
    const listItem = $('<li>').text(taskName);
    taskList.append(listItem);
}

function toggleTask(event) {
    $(event.target).toggleClass('completed');
}

$('#taskForm').submit(function(event) {
    event.preventDefault();
    const taskInput = $('#taskInput');
    const taskName = taskInput.val().trim();

if (taskName !== '') {
    addTask(taskName);
    taskInput.val('');
    }
});

$('#taskList').on('click', 'li', toggleTask);
