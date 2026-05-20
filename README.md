# F5 EJERCICIO - JavaScript, Vitest

## Plan:
0. Escribir un plan en `README.md`. 
1. Preparacuib del proyecto.
    - Crear un repositorio.
    - Instalar los dependencias. 
2. Crear funcion `checkNumbers()` en `fizz-bazz.js`.
3. Ańadir solamente primer escenario para comprobar que todo funciona bien en `fizz-bazz.test.js`.
4. Anadir mas situaciones al test archivo.
5. Hacer todos los testos y hacer el screenshot de la pantalla.


## Escenarios:
Scenario: Número divisible por 3
    Given que proporciono el número 3
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "Fizz"

Scenario: Número divisible por 5
    Given que proporciono el número 5
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "Buzz"

Scenario: Número divisible por 3 y 5
    Given que proporciono el número 15
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "FizzBuzz"

Scenario: Número no divisible ni por 3 ni por 5
    Given que proporciono el número 7
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "7"

Scenario: El dato proporcionado no es un número
    Given que proporciono el valor "hola"
    When ejecuto la función FizzBuzz
    Then debe lanzarse un error indicando que el dato no es un número




