$(document).ready(function(){
    
    window.taskid=0;
    window.tlist = new TaskList("");
    window.tlist.load("demo", function(lst){
        window.tlist.title = lst.title;
        lst.tasks.forEach(task => {
            console.log(task);
            window.tlist.add(new Task(task, window.taskid))
            if(task.done == true)
            {
                window.tlist.getById(window.taskid).setDone();
            }        
            window.taskid += 1;
        });
        $('#list ul').append(tlist.render());
        $("#title").text(window.tlist.title);
    });
    
<<<<<<< HEAD
    function addTaskToGui(task, id)
    {
        console.log(window.openTask);
       $("#list ul").append('<li type="1" value='+ id +' id="task-'+id+'"><span contenteditable="true" class="tsk-tit">'+task.title+'</span> <span class="checkit">'+window.openTask+'</span></li>');
    };


=======
>>>>>>> e1e26b0a5c79674d11e58167001dd0732fe71a76
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
        var repl = id.replace("task-", "");

        console.log(isChecked);
        if(!isChecked)
        {
            
            window.tlist.getById(repl).setDone();
            $search.data(check, true);
            $search.removeClass("alert-danger");
            $search.addClass("alert-success");
            search = search+" .checkit";
            $(search).html("<i class=\"fa fa-check\"></i>");
        }
        else
        {
            window.tlist.getById(repl).setUndone();
            $search.data(check, false);
            $search.addClass("alert-danger");
            $search.removeClass("alert-success");
            search = search+" .checkit";
            $(search).html("<i class=\"fa fa-clone\"></i>");   
        }


    }

    $('#list ul').on("click", "li", function(e) 
    {
        
        var id=$(e.target).parent().parent().parent().attr("id");
        if(id.startsWith("task-"))
        {
            completeTask(id);
        }
        
    });

    $('#list ul').children(".tsk-tit").off();

    $('#addTaskForm form').submit(function(e)
    {
        e.preventDefault();
        var tit = $('#addTaskForm').find('input[name="title"]').val();
        var taskId = (window.taskid + 1);
        var task = new Task(tit, taskId);
        window.tlist.add(task);
<<<<<<< HEAD
        addTaskToGui(task, taskId);
=======
        task.render().appendTo("#list ul");
>>>>>>> e1e26b0a5c79674d11e58167001dd0732fe71a76
        window.taskid += 1;
        $('#addTaskForm').find('input[name="title"]').val("");
    });
});
   


