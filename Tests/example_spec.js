describe('tasklist homepage', function() {
	beforeEach(function() {
		browser.get('file:///C:/Users/Nick/git/tasklist/index.html');
	});

	it('should have a title with the text "Titel"', function() {
		element(by.css('#title')).getText().then(function(text) {
			browser.pause();
			expect(text).toEqual('1337 H@xxor Tasks');
		});
	});

	describe('tasks list', function() {
		var todoList;
		var object_patern = require('./object_patern.js');
		
		it('should add a task', function() {
			var input = 'Test';
			object_patern.addTask(input);
			todoList = element.all(by.css('#tasks'));
			todoList.get(0).getText().then(function(text){
				expect(text).toEqual(input);
			});
		});
		
	});
});
