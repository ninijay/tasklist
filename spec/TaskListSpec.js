describe("TaskList", function() {
  var tasklist;

  beforeEach(function() {
    tasklist = new TaskList("Tasklist");
  });

  it("should have tasks", function() {
    tasklist.add(new Task('name1'));
    tasklist.add(new Task('name2'));
    expect(tasklist.count()).toEqual(2);
  });

  it("should have a title", function(){
    expect(tasklist.title).toEqual("Tasklist");
  });

  it("should be able to remove"), function(){
    var task = new Task("cooltask");
    tasklist.add(task);
    expect(tasklist.count()).toEqual(1);
    tasklist.remove(task);
    expect(tasklist.count()).toEqual(0);
  });
});
