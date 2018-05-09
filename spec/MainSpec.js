describe("Main", function() {
  it("should fetch all list ids", function(){
    var m = new Main();
    spyOn(m, 'fetchlists').and.returnValue(true);
      m.fetchlists(function(){
        console.log("hi");
      });
      expect(m.fetchlists).toHaveBeenCalled();
  })
});