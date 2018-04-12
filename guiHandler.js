$(document).ready(function(){
    
    window.taskid=0;

    function addTaskToGui(task, id)
    {
        console.log(id);
        console.log($("#list ul #tasks"));
        $("#list ul").append('<li id="task-'+id+'">'+task.title+'</li>');
    };

    function completeTask(id)
    {
        var search = "#task-"+id;
        $(search).addClass("completed");
    }

    $('#list ul #tasks').on("click", "li", function(e) 
    { 
        completeTask(e.target.id);
    });

    $('#addTaskForm').submit(function(e)
    {
        e.preventDefault();
        var tit = $('#addTaskForm').find('input[name="title"]').val();
        var task = new Task(tit);
        addTaskToGui(task, window.taskid);
        window.taskid += 1;
    });
});
   
   

