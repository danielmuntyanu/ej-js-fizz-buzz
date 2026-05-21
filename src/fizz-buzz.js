export function checkNumber (numb) {
    // Scenario: El dato proporcionado no es un número
    if (!criteriaAcceptacion(numb)) {
        throw new Error("el dato no es un número");
    };

    // Scenario: Número divisible por 3 y 5
    if ( numb % 3 === 0 && numb % 5 === 0) {
        return "FizzBuzz";
    }


    // Scenario: Número divisible por 3
    if ( numb % 3 === 0 ) {
        return "Fizz";
    }


    // Scenario: Número divisible por 5
    if ( numb % 5 === 0) {
        return "Buzz";
    }


    // Scenario: Número no divisible ni por 3 ni por 5
    return numb;
    
};


function criteriaAcceptacion (value) {
    
    if (!Number.isInteger(value)) {
        return false;
    }

    if (typeof value !== 'number') {
        return false;
    }

    if (Number.isNaN(value)) {
        return false;
    }

    if (value % 1 !== 0) {
        return false;
    }

    return true;
}