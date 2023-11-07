

import { assert } from "chai"

import {sumDigits} from "../src/sumDigits"

describe("sumDigits returns sum of digits", function () {
    it("sum digits of 123", function () {
        assert.strictEqual(sumDigits(123), 6);
});
it(" sum digits of 12345", function () {
assert.strictEqual(sumDigits(12345), 15); });
it(" sum digits of 678", function () {
  assert.strictEqual(sumDigits(678), 21); });
});