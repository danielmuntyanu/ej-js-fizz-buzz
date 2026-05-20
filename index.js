import {checkNumber} from "./src/fizz-buzz.js";

console.log("=== FizzBuzz ===\n");

for ( let i = 1; i <= 100; i++) {
    const result = checkNumber(i);
    console.log(`${i} -> ${result}`);
}

console.log("\n=== Gracias ===");