describe("Task", function() {
  var task;
  var name="task1";
  var id=0;

  beforeEach(function() {
    task = new Task(name, id);
  });

  it("should have title", function() {
    expect(task.title).toEqual(name);
  });

  it("should be not done", function(){
    expect(task.done).toEqual(false);
  });

  it("should be able to be done", function(){
    task.setDone();
    expect(task.done).toEqual(true);
  });
});