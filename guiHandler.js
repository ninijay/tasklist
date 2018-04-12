$(document).ready(function(){
    
    window.taskid=0;
    window.tlist = new TaskList("1337 H@xxor Tasks");

    $("#title").text(window.tlist.title);
    
    function addTaskToGui(task, id)
    {
       $("#list ul").append('<li id="task-'+id+'">'+task.title+'</li>');
    };

    function completeTask(id)
    {
        var search = "#"+id;
        $(search).addClass("completed");
    }

    $('#list ul').on("click", "li", function(e) 
    {
        var id=e.target.id;
        var search = id.replace("task-", "");
        
        window.tlist.getById(search).setDone();
        console.log(tlist.tasks);
        completeTask(id);
    });

    $('#addTaskForm').submit(function(e)
    {
        e.preventDefault();
        var tit = $('#addTaskForm').find('input[name="title"]').val();
        var task = new Task(tit, window.taskid);
        window.tlist.add(task);
        addTaskToGui(task, window.taskid);
        window.taskid += 1;
    });
});
   
   

