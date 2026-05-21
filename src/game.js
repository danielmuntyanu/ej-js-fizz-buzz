import { checkNumber } from "./fizz-buzz.js";

export function gameRun(numbers_list) {

    const results = {}

    for (const number of numbers_list) {
        results[number] = checkNumber(number);
    };

    return results;

}