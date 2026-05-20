export function checkNumber (numb) {
    // Scenario: El dato proporcionado no es un número
    //     Given que proporciono el valor "hola"
    //     When ejecuto la función FizzBuzz
    //     Then debe lanzarse un error indicando que el dato no es un número

    // if (!Number.isInteger(numb) || typeof numb === 'undefined' || typeof numb === 'string') {
    if (!Number.isInteger(numb)) {
        return "el dato no es un número";
    }

    // Scenario: Número divisible por 3 y 5
    //     Given que proporciono el número 15
    //     When ejecuto la función FizzBuzz
    //     Then el resultado debe ser "FizzBuzz"



    // Scenario: Número divisible por 3
    //     Given que proporciono el número 3
    //     When ejecuto la función FizzBuzz
    //     Then el resultado debe ser "Fizz"
    


    // Scenario: Número divisible por 5
    //     Given que proporciono el número 5
    //     When ejecuto la función FizzBuzz
    //     Then el resultado debe ser "Buzz"



    // Scenario: Número no divisible ni por 3 ni por 5
    //     Given que proporciono el número 7
    //     When ejecuto la función FizzBuzz
    //     Then el resultado debe ser "7"
    return numb;
    
};