// Função para adicionar uma nova tarefa à lista
function addTask(taskName) {
    const taskList = $('#taskList');
    const listItem = $('<li>').text(taskName);
    taskList.append(listItem);
}

  // Função para marcar uma tarefa como concluída
function toggleTask(event) {
    $(event.target).toggleClass('completed');
}

  // Manipulador de evento para o formulário de adicionar tarefas
$('#taskForm').submit(function(event) {
    event.preventDefault();
    const taskInput = $('#taskInput');
    const taskName = taskInput.val().trim();

if (taskName !== '') {
    addTask(taskName);
    taskInput.val('');
    }
});

  // Manipulador de evento para marcar tarefa como concluída
$('#taskList').on('click', 'li', toggleTask);
