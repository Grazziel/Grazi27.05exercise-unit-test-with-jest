// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("100 dollars should be equivalent in yen", function() {
    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(100);

    expect(yens).toBe(100 / 1.07 * 156.5);
})

test("100 yen should be equivalent in pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(100);

    expect(pounds).toBe(100 / 156.5 * 0.87);
})