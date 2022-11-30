const { expect } = require("chai");
const chai = require("chai");
const except = chai.expect;

describe("practicing chai", () => {
  it("should compare some number", () => {
    except(1).to.be.equal(1);
  });
  it("should compare some number", () => {
    except(1).equal(1);
    except({name:'john'}).to.deep.equal({name:'john'});
    except(3>4).to.be.false;
    except(3>4).to.be.not.true;
    expect('hello').to.a('string').and.have.lengthOf(5);
    expect([1,2,3]).to.be.an('array').and.have.lengthOf(3);
    except(null).to.be.null;
    except(undefined).to.be.not.exist;
    except(1).to.be.exist;
  });
});
