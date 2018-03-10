function TaskList(title){
    this.title = title;
    var tasks = [];
    
    function add(task) {
    	tasks.push(task);
    }
    
    function remove(taksTitle) {
    	for(var i = 0; i < tasks.length; i++) {
    		if(tasks[i].title == taskTitle) {
    			tasks.splice(i, 1);
    			break;
    		}
    	}
    }
    
    function count() {
    	return tasks.length;
    }
    
    
}

