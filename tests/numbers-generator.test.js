import { describe, expect, test } from "vitest";
import { generateNumbers } from "../src/numbers-generator";


describe("Testing of numbers generator", () => {
    test("Should return length of 100", () => {
        expect(generateNumbers().length).toBe(100);
    });

    test("Shoukd have first object of value 1", () => {
        expect(generateNumbers().at(0)).toBe(1);
    });

    test("Shoukd have last object of value 100", () => {
        expect(generateNumbers().at(-1)).toBe(100);
    });

});
