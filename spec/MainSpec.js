describe("Main", function() {
  it("should fetch all list ids", function(){
    var m = new Main();
    spyOn(m, 'createList').and.returnValue(true);
      m.createList(function(){
        console.log("hi");
      });
      expect(m.createList).toHaveBeenCalled();
  })
});