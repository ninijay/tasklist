function TaskList(title){
    this.title = title;
    this.tasks = [];
}

TaskList.prototype.add = function(task) {
    this.tasks.push(task);
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

