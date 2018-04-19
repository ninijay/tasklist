describe("Task", function() {
  var task;
  var name="task1";
  var id=0;

  beforeEach(function() {
    task = new Task();
  });
 
  describe("basic object oriented features", function() {

    it("has a name property", function() {
      expect(task.title).toEqual("");
      task.title = 'test task';
      expect(task.title).toEqual('test task');
    });

    it("has a done property", function() {
      expect(task.done).toBeFalsy();
      task.done = true;
      expect(task.done).toEqual(true);
    });

    it("sets title via constructor" , function() {
      var task2 = new Task("title set");
      expect(task2.title).toEqual("title set");
    });

    it("distinguishes objects from each other", function() {
      var task2 = new Task('new');
      expect(task2.title).not.toEqual(task.title);
      expect(task2).not.toEqual(task);
    });

  });

  describe("render", function() {
    it("renders an unchecked checkbox", function() {
      var $markup = task.render();
      expect($markup.find('.alert-danger')).not.toEqual(null);
    });
    it("renders an empty input field", function() {
      var $markup = task.render();
      expect($markup.find('.tsk-tit').text()).toEqual('')
    });
    it("checks the checkbox when done", function() {
      task.done = true;
      var $markup = task.render();
      expect($markup.find('.alert-success')).not.toEqual(null);
    });
    it("renders an the title", function() {
      task.title = 'task title';
      var $markup = task.render();
      expect($markup.find('.tsk-tit').text()).toEqual('task title');
    });
  });
});