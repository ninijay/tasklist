$(document).ready(function(){
    
    function addTaskToGui(task, id)
    {
        $("#list ul #tasks").append('<li id="task-'+id+'">'+task.title+'</li>');
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

    $("#addTaskForm")

    var text = $('#DynamicValueAssignedHere').find('input[name="FirstName"]').val();

});
   
   

