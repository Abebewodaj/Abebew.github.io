/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
import { calculator } from "../src/calculator.js"; //import objects used in the Mocha tests
describe("test calculator with values 4, 5", function () {
    calculator.setValues(4, 5); //values for the tests
    it("checks initial values 4 and 5", function () {
        assert.strictEqual(calculator.operand1, 4);
        assert.strictEqual(calculator.operand2, 5);
    });
    it("when 4 and 5 are entered, the sum is 9", function () {
        assert.strictEqual(calculator.sum(), 9);
    });
    it("when 4 and 5 are entered, the product is 20", function () {
        assert.strictEqual(calculator.mul(), 20);
    });
    it("when 4 and 5 are entered, the division is 0.8", function () {
        assert.strictEqual(calculator.div(), 0.8);
    });
    it("when 4 and 5 are entered, the substruction is -1", function () {
        assert.strictEqual(calculator.sub(), -1);
    });
});
