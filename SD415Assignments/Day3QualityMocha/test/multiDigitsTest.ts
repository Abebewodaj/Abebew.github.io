import { assert } from "chai";
import { multDigits } from "../src/multiDigits";

describe("multiDigits returns multiplication of digits", function () {
  it("multiplication of digits of 123", function () {
    assert.strictEqual(multDigits(123), 6);
  });
  it("multiplication of digits of 12345", function () {
    assert.strictEqual(multDigits(12345), 120);
  });
  it(" multiplication of digits of 678", function () {
    assert.strictEqual(multDigits(678), 336);
  });
});
