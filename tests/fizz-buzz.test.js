import { describe, expect, test } from "vitest";
import {checkNumber} from "../src/fizz-buzz"


describe("FizzBuzz", () => {
    test("Should return Fizz", () => {
        const n = 3;
        const expected = "Fizz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });
});