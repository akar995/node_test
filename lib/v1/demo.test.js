const { expect } = require("chai");
const chai = require("chai");
const except = chai.expect;
const { addCallback, addPromise } = require("./demo");
describe("practicing chai", () => {
  context("testing callbacks", () => {
    it("should test callback", (done) => {
      addCallback(1, 2, (err, result) => {
        expect(err).to.be.null;
        expect(result).to.be.equal(3);
        done();
      });
    });
  });
  context("practicing promise to sum ab", () => {
    it("should return sum with promise", () => {
      return addPromise(3, 4).then((result) => {
        expect(result).to.be.equal(7);
      });
    });
  });
});
