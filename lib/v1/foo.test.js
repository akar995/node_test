const assert = require("assert");

describe("practicing test", () => {
  context("practicing equals in generals", () => {
    let a = 1;
    beforeEach(() => {
        // the name implies it will be executed before each test in the context
            console.log("================> beforeEach",a += 1);
        });
    before(() => {
      //this can be used to set up the test meaning that initialize some variables here and there before starting the test
      console.log("================> before",a += 1);
    });

    after(() => {
      //this will be executed after the test is done
      //can be used to clean up the test meaning removing cache or something like that
      console.log("================> after",a += 1);
    });
 
    it("should do normal equal test", () => {
      assert.equal(1, 1);
    });
    it("should do deep equal test", () => {
      assert.deepEqual({ name: "john" }, { name: "john" });
    });
    it("should show pending test");
  });

  context("practicing multiple context", () => {
    it('should be pending test');
  });
});
