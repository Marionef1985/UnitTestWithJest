const { sum } = require('./app.js');

test ("adds 14 + 9 to equal 23", () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.206)
    const expected = 3.5 * 1.206; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.221); //1 euro are 1.206 dolares, then 3.5 euros should be = (3.5 * 1.206)
})

test("One dollar should be 106.053 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(5)
    const expected = (5 * 127.9)/1.2;
    expect(fromDollarToYen(5)).toBe(532.9166666666667);
})

test("One Yen should be 0.006 pounds", function(){
    const {fromYenToPound} = require('./app.js')
    const pounds = fromYenToPound(300)
    const expected = (300 * 0.8)/127.9;
    expect(fromYenToPound(300)).toBe(1.8764659890539483);
})