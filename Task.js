function Task(title, id) {
    this.title = title;
    this.done = false;
    this.id;
}

Task.prototype.setDone = function(){
    this.done = true;
}
