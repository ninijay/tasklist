function Main()
{

}

Main.prototype.fetchlists = function(callback){
    $.getJSON('http://zhaw.herokuapp.com/task_lists/', function (data) {
        var ids =[];
        data.forEach(list => {
            ids.push(list.id);
        });
        callback(ids);
    });
}