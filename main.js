function Main()
{
    this.id;
}

Main.prototype.createList = function (callback){
    $.post('http://zhaw.herokuapp.com/task_lists/', { tasks:[ {title: "new task", done : false} ]}, function (data) {
        var id = data.id;
        console.log(id);
        this.id = id;
        callback(id);
    }).done(function( data ) {
        alert( "Data Loaded: " + data );
      });
}