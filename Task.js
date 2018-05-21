function Task(title, id) {
    this.title = title || "";
    this.done = false;
    this.id = id;
}

Task.prototype.setDone = function () {
    this.done = true;
}

Task.prototype.setUndone = function () {
    this.done = false;
}

Task.prototype.toJSON = function() {
    return JSON.stringify({title:this.title, done:this.done, id: this.id});
}

Task.prototype.render = function () {
    var $markup;

    var $open = $('<i>',
        {
            class: "fa fa-clone"
        });

    var $closed = $('<i>',
        {
            class: "fa fa-check"
        });

    var $done = $('<span>',
        {
            class: 'checkit',
        }).html((this.done) ? $closed : $open);

    var $title = $('<span>', {
        contenteditable: true,
        class: "tsk-tit"
    }).text(this.title);

    $markup = $('<li>', {
        class: "alert",
        id: "task-" + this.id
    }).append([$done, $title]);

    $markup.addClass((this.done) ? "alert-success" : "alert-danger");
    $markup.data("checked", this.done);
    return $markup;
}