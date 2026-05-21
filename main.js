import { generateNumbers } from "./src/numbers-generator.js";
import { gameRun } from "./src/game.js";

function app() {

    console.log("=== FizzBuzz ===\n");

    const results = gameRun(generateNumbers());
    console.log(results);

    console.log("\n=== Gracias ===");
}

app();

