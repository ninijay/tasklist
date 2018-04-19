$(document).ready(function(){
    
    window.taskid=0;
    window.tlist = new TaskList("1337 H@xxor Tasks");
    window.openTask ="<i class=\"fa fa-clone\"></i> "// "<i class=\"fas fa-thumbtack\"></i>";

    $("#title").text(window.tlist.title);
    
    function addTaskToGui(task, id)
    {
        console.log(window.openTask);
        var li = $("#list ul").append(
            $('<li>').attr('id', 'task-'+id).append(
                $("<span>").addClass("checkit").html(window.openTask))
            .append(
                $("<span>").attr("contenteditable", "true").addClass("tsk-tit").text(task.title)
            ).addClass("alert").addClass("alert-danger"));

            $("task-"+id).data("checked");
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
        var $search = $(search);
        var check = "checked";
        var isChecked = $search.data(check);

        console.log(isChecked);
        if(!isChecked)
        {
            $search.data(check, true);
            $search.removeClass("alert-danger");
            $search.addClass("alert-success");
            search = search+" .checkit";
            $(search).html("<i class=\"fa fa-check\"></i>");
        }
        else
        {
            $search.data(check, false);
            $search.addClass("alert-danger");
            $search.removeClass("alert-success");
            search = search+" .checkit";
            $(search).html(window.openTask);   
        }


    }

    $('#list ul').on("click", "li", function(e) 
    {
        
        var id=$(e.target).parent().parent().parent().attr("id");
        if(id.startsWith("task-"))
        {
            var search = id.replace("task-", "");
            window.tlist.getById(search).setDone();
            completeTask(id);
        }
        
    });

    $('#list ul').children(".tsk-tit").off();

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
   


