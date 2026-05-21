import { describe, expect, test } from "vitest";
import { generateNumbers } from "../src/numbers-generator.js";
import { gameRun } from "../src/game.js";

describe("Tests for checking the gameRun function with 100 numbers and game logic", () => {
    test("Should return Fizz", () => {
        const results = gameRun(generateNumbers());
        expect(results["72"]).toBe("Fizz");
    });

    test("Should return Buzz", () => {
        const results = gameRun(generateNumbers());
        expect(results["95"]).toBe("Buzz");
    });
    
    test("Should return FizzBuzz", () => {
        const results = gameRun(generateNumbers());
        expect(results["30"]).toBe("FizzBuzz");
    });

    test("Should return initial number", () => {
        const results = gameRun(generateNumbers());
        expect(results["61"]).toBe(61);
    });
});