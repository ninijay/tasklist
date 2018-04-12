describe('tasklist homepage', function() {
	beforeEach(function() {
		browser.get('file:///C:/Users/Nick/git/tasklist/index.html');
	});

	it('should have a title with the text "Titel"', function() {
		element(by.css('#title')).getText().then(function(text) {
			browser.pause();
			expect(text).toEqual('Titel');
		});
	});

	describe('todo list', function() {
		var todoList;

		beforeEach(function() {
			browser.get('http://www.angularjs.org');

			todoList = element.all(by.repeater('todo in todoList.todos'));
		});

		xit('should list todos',
				function() {
					expect(todoList.count()).toEqual(2);
					expect(todoList.get(1).getText()).toEqual(
							'build an AngularJS app');
				});

		xit('should add a todo', function() {
			var addTodo = element(by.model('todoList.todoText'));
			var addButton = element(by.css('[value="add"]'));

			addTodo.sendKeys('write a protractor test');
			addButton.click();

			expect(todoList.count()).toEqual(3);
			expect(todoList.get(2).getText())
					.toEqual('write a protractor test');
		});
	});
});
