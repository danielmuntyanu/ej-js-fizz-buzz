import { describe, expect, test } from "vitest";
import {checkNumber} from "../src/fizz-buzz"


describe("FizzBuzz", () => {
    test("Should return Fizz", () => {
        const n = 3;
        const expected = "Fizz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });
    
    test("Should return Bazz", () => {
        const n = 5;
        const expected = "Bazz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });

    test("Should return FizzBazz", () => {
        const n = 15;
        const expected = "FizzBazz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    });

    test("Should return Fizz", () => {
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