$(document).ready(function(){
    var param = window.location.href.split('#');

    window.taskid=0;
    window.tlist = new TaskList("");

    function loadTask(id){
        window.tlist.id = id;
        window.tlist.load(id, function(lst){
            window.tlist.title = lst.title;
            lst.tasks.forEach(task => {
                console.log(task);
                window.tlist.add(new Task(task.title, window.taskid, task.done))
                if(task.done == true)
                {
                    window.tlist.getById(window.taskid).setDone();
                }        
                window.taskid += 1;
            });
            $('#list ul').append(tlist.render());
            $("#title").text(window.tlist.title);
        });
    }

    if(param.length == 1){
        loadTask("demo");
    }else{
        loadTask(param[1]);
    }

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
        function findTask(control){
            var id = $(control).attr("id"); 
            if(id !== undefined && id.startsWith("task-")){
                completeTask(id);
            }else if($(control).parent() !== undefined){
                findTask($(control).parent());
            }
        }
        findTask(e.target);
        //var id=$(e.target).parent().parent().parent().attr("id");
   
    });

    $('#list ul').children(".tsk-tit").off();

    $('#addTaskForm form').submit(function(e)
    {
        e.preventDefault();
        var tit = $('#addTaskForm').find('input[name="title"]').val();
        var taskId = (window.taskid + 1);
        var task = new Task(tit, taskId);
        window.tlist.add(task);
        task.render().appendTo("#list ul");
        window.taskid += 1;
        $('#addTaskForm').find('input[name="title"]').val("");
    });

    $('#saveTrigger').click(function(e){
        e.preventDefault();
        window.tlist.save();
    });

    $('#createTrigger').click(function(e){
        e.preventDefault();
        $('#enterNewTasklistNameModal').css("opacity", 100);
        $('#enterNewTasklistNameModal').css("display", "block");
        $('#newTaskListName').prop("text", "");
        $('#acceptModal').prop("disabled", true);
    });

    function hideModal(){
        $('#enterNewTasklistNameModal').css("opacity", 0);
        $('#enterNewTasklistNameModal').css("display", "none");
    }

    $('#closeModal').click(function(e){
        e.preventDefault();
        hideModal();
    });

    $('#acceptModal').click(function(e){
        e.preventDefault();
        var taskListName = $('#newTaskListName').val();
        var newTaskList = new TaskList();
        newTaskList.id = taskListName;
        newTaskList.title = taskListName + " Tasklist";
        newTaskList.saveNew(function(d){
            var dt = $.parseJSON(d);
            alert("TaskList ID: "+dt.id);
        });
        window.tlist = newTaskList;
        hideModal();
    });

    $('#newTaskListName').keyup(function(e){
        var name = $('#newTaskListName').val();
        if(name.length > 0){
            $('#acceptModal').prop("disabled", false);
        }else{
            $('#acceptModal').prop("disabled", true);
        }
    })
});
   


