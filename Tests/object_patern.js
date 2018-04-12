var object_patern = function() {
	this.addTask = function(taskText) {
		element(by.css('#taskinput')).sendKeys(taskText);
		element(by.css('#addTrigger')).click();
	}
	
};
module.exports = new object_patern();