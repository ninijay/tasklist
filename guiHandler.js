$(document).ready(function(){
    
    window.taskid=0;
    window.tlist = new TaskList("1337 H@xxor Tasks");
    window.openTask ="<i class=\"fa fa-clone\"></i>"// "<i class=\"fas fa-thumbtack\"></i>";

    $("#title").text(window.tlist.title);
    
    function addTaskToGui(task, id)
    {
        console.log(window.openTask);
       $("#list ul").append('<li id="task-'+id+'">'+window.openTask+' '+task.title+'</li>');
    };

    function completeTask(id)
    {
        var search = "#"+id;
        $(search).addClass("completed");
        var text = $(search).text();
        text = text.replace(window.openTask, "");
        text = "<i class=\"fa fa-check\"></i> " + text;
        $(search).html(text);
    }

    $('#list ul').on("click", "li", function(e) 
    {
        var id=e.target.id;
        var search = id.replace("task-", "");
        
        window.tlist.getById(search).setDone();
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
   


