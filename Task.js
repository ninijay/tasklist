function Task(title) {
    this.title = title;
    this.done = false;
}

Task.prototype.setDone = function(){
    this.done = true;
}
