# F5 EJERCICIO - JavaScript, Vitest

**Stack: JavaScript, Vitest, npm.**
**Metodología: TDD (Test Driven Development)**

## Plan:
0. ✅ Escribir un plan en `README.md`. 
1. ✅ Preparacuib del proyecto.
    - Crear un repositorio locale.
    - Instalar los dependencias. 
2. ✅ Escribir tests para todos los escenarios en `fizz-bazz.test.js`.
3. ✅ Crear funcion `checkNumbers()` con solamente primer escenario en `fizz-bazz.js`, hacer un test.
4. ✅ Anadir una lógica en `fizz-bass.js` pora mas escenarios.
5. ✅ Modificar el test para recibir un Error correctamente.
6. Hacer todos los testos y hacer el screenshot de la pantalla.
7. Anadir una programa para encontrar respuestas para cada numero de 0 a 100.
8. Push a GitHub repositorio.


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




