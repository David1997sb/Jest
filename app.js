// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInUsd){
    // convert the given valueInUsd to Yen
    let valueInYen = valueInUsd * 127.9;
    //return the Yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInUsd to Yen
    let valueInPound = valueInYen * 0.8;
    //return the Yen value
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound};