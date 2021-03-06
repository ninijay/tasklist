function TaskList(title){
    this.id = null;
    this.title = title;
    this.tasks = [];
}

TaskList.prototype.add = function(task) {
    this.tasks.push(task);
    return this.getById(task.id);
}

TaskList.prototype.remove = function(task) {
    for(var i = 0; i < this.tasks.length; i++) {
        if(this.tasks[i] === task) {
            this.tasks.splice(i, 1);
            break;
        }
    }
}

TaskList.prototype.getById = function(id) {
    for(var i = 0; i < this.tasks.length; i++) {
        if(this.tasks[i].id == id) {
            return this.tasks[i];
            break;
        }
    }

    return new Task("No Task found", -1);
}

TaskList.prototype.count = function() {
    return this.tasks.length;
}

TaskList.prototype.render = function() {
    var $tasks = [];
    $.each(this.tasks, function(index, task) {
        $tasks.push(task.render());
    });

    return $tasks;
}

TaskList.prototype.toJSON = function () {
    return JSON.stringify({title:this.title, tasks:this.tasks, id: this.id});
};

TaskList.prototype.load = function (id, callback) {
    var taskList = new TaskList();
    $.getJSON('https://zhaw.herokuapp.com/task_lists/' + id, function (data) {
        taskList.id = data.id;
        $.each(data.tasks, function (index, task) {
            var tsk = new Task(task.title, null, task.done);
            var t = taskList.add(tsk);
        });
        taskList.title = data.title;
        callback(taskList);
    });
}

TaskList.prototype.save = function(callback){
    $.post('https://zhaw.herokuapp.com/task_lists/' + this.id, this.toJSON(), function(data){
        
    }).done(function(data){
        alert("Tasklist updated");
    });
}

TaskList.prototype.saveNew = function(callback){
    $.post('https://zhaw.herokuapp.com/task_lists/', this.toJSON(), function(data){
        callback(data);
    }).done(function(data){
        alert("Tasklist saved");
    });
}


