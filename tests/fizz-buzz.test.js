import { describe, expect, test } from "vitest";
import {checkNumber} from "../src/fizz-buzz"


describe("FizzBuzz", () => {
    test("Should return Fizz", () => {
        const n = 3;
        const expected = "Fizz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });
    
    test("Should return Buzz", () => {
        const n = 5;
        const expected = "Buzz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });

    test("Should return FizzBuzz", () => {
        const n = 15;
        const expected = "FizzBuzz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });

    test("Should return the same number", () => {
        const n = 7;
        const expected = n;
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });
    
    test("Should return Error", () => {
        const n = "hola";
        const expected = "el dato no es un número";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });
});