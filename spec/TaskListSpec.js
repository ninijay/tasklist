describe("TaskList", function () {
  var tasklist;

  beforeEach(function () {
    tasklist = new TaskList("Tasklist");
  });
  describe("basic functions", function () {
    it("should have tasks", function () {
      tasklist.add(new Task("name1", 0));
      tasklist.add(new Task("name2", 1));
      expect(tasklist.count()).toEqual(2);
    });

    it("should have a title", function () {
      expect(tasklist.title).toEqual("Tasklist");
    });

    it("should be able to remove", function () {
      var taskOne = new Task("cooltask", 3);
      tasklist.add(taskOne);
      expect(tasklist.count()).toEqual(1);
      tasklist.remove(taskOne);
      expect(tasklist.count()).toEqual(0);
    });

    it("should be able to find by id", function () {
      var taskwithID = new Task("Test", 0);
      tasklist.add(taskwithID);
      var test = tasklist.getById(0);
      expect(test.title).toEqual("Test");
    });
  });

  describe("rendering", function () {
    it("should be able to print a list", function () {
      var newTask = new Task("Test", 0);
      tasklist.add(newTask);
      var test = tasklist.render();
      console.log(test);
      expect(test.length).toEqual(1);
      expect(test[0].attr("id")).toEqual("task-0");
    });
  });

  describe("api-calls", function () {
    it("should be able to fetch data from a list", function () {
      spyOn(tasklist, 'load').and.returnValue(true);
      tasklist.load("demo", function(){
        console.log("hi");
      });
      expect(tasklist.load).toHaveBeenCalled();
    });
  });

});
