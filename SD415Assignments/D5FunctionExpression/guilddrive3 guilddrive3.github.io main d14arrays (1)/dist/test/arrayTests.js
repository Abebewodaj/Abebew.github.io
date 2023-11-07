/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
import { double, times100, myMap, myMapS} from "../src/app.js";

describe("double", function () {
    it("number and return doubles", function () {
        assert.strictEqual(double(20), 40);
    });
    it("number and return doubles", function () {
        assert.strictEqual(double(10), 20);
    });
    it("number and return doubles", function () {
        assert.strictEqual(double(100), 200);
    });


    it("times100", function () {
        assert.strictEqual(times100(2), 200);
    });
  
    it("times100", function () {
        assert.strictEqual(times100(4), 400);
    });

});