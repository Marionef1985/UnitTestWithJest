

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.206;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYens = (valueInDollar * 127.9/1.2)
    return valueInYens
}

const fromYenToPound = function(valueInYen) {
    let valueInPounds = ((valueInYen*0.8)/127.9)
    return valueInPounds
}



const sum = (a,b) =>{
        return a+b;
}

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound }

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}