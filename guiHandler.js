$(document).ready(function(){
    
    window.taskid=0;
    window.tlist = new TaskList("1337 H@xxor Tasks");
    window.openTask ="<i class=\"fa fa-clone\"></i>"// "<i class=\"fas fa-thumbtack\"></i>";

    $("#title").text(window.tlist.title);
    
    function addTaskToGui(task, id)
    {
        console.log(window.openTask);
       $("#list ul").append('<li id="task-'+id+'"><span class="checkit">'+window.openTask+'</span> <span contenteditable="true" class="tsk-tit">'+task.title+'</span></li>');
    };


    function editTask(id, text)
    {
        window.tlist.getById(id).title = text;
    };

    $('#list ul').keypress(function(e)
    {
        var id=$(e.target).parent().attr("id");
        var search = id.replace("task-", "");
        var text = $(e.target).text();
        console.log(search);
        editTask(search, text);
    });

    function completeTask(id)
    {
        var search = "#"+id;
        $(search).addClass("completed");
        search = search+" .checkit";
        $(search).html("<i class=\"fa fa-check\"></i>");
    }

    $('#list ul').on("click", ".checkit", function(e) 
    {
        var id=$(e.target).parent().parent();
        id = id.attr("id");
        var search = id.replace("task-", "");
        window.tlist.getById(search).setDone();
        completeTask(id);
    });

    $('#addTaskForm form').submit(function(e)
    {
        e.preventDefault();
        var tit = $('#addTaskForm').find('input[name="title"]').val();
        var task = new Task(tit, window.taskid);
        window.tlist.add(task);
        addTaskToGui(task, window.taskid);
        window.taskid += 1;
    });
});
   


