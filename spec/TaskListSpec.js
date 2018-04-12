describe("TaskList", function() {
  var tasklist;

  beforeEach(function() {
    tasklist = new TaskList("Tasklist");
  });

  it("should have tasks", function() {
    tasklist.add(new Task("name1", 0));
    tasklist.add(new Task("name2", 1));
    expect(tasklist.count()).toEqual(2);
  });

  it("should have a title", function(){
    expect(tasklist.title).toEqual("Tasklist");
  });

  it("should be able to remove", function(){
    var taskOne = new Task("cooltask", 3);
    tasklist.add(taskOne);
    expect(tasklist.count()).toEqual(1);
    tasklist.remove(taskOne);
    expect(tasklist.count()).toEqual(0);
  });

  it("should be able to find by id", function(){
    var taskwithID = new Task("Test", 0);
    tasklist.add(taskwithID);
    var test = tasklist.getById(0); 
    console.log(test);
    expect(test.title).toEqual("Test");
  })
});
