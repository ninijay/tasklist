function TaskList(title){
    this.title = title;
    var tasks = [];
    
    this.add = function(task) {
    	tasks.push(task);
    }
    
    this.remove = function(taksTitle) {
    	for(var i = 0; i < tasks.length; i++) {
    		if(tasks[i].title == taskTitle) {
    			tasks.splice(i, 1);
    			break;
    		}
    	}
    }
    
    this.count = function() {
    	return tasks.length;
    }
    
    
}

