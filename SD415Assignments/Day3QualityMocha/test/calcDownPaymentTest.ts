import { assert } from "chai";

import { calcDownpayment } from "../src/calcDownPayment";
describe(" calculate downpayment", function () {
  it("tests cost of house 45000 downpayment of 2250", function () {
    assert.strictEqual(calcDownpayment(45000), 2250);
  });
  it("tests cost of house 70000 downpayment of 3000", function () {
    assert.strictEqual(calcDownpayment(70000), 3000);
  });
  it("tests cost of house 150000 downpayment of 9500", function () {
    assert.strictEqual(calcDownpayment(150000), 9500);
  });
  it("tests cost of house 300000 downpayment of 15000", function () {
    assert.strictEqual(calcDownpayment(300000), 15000);
  });
});

