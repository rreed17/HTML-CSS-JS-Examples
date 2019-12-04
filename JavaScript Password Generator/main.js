//Dom elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

//Put all functions within a object
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
//Generate event listner
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length);
    /*resultEl.innerText.generatedPassword(hasLower, hasUpper, hasNumbers, hasSymbols, length);*/
});

//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    //1. Init password variable
    //2. filter out unchecked types
    //3. Loop over the length and call genrator function for each type
    //4. Add final password to the password variable and return    
    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    console.log('typesCount: ', typesCount);
    //Checks to see what option is checked and only return variable for that one
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
        (
            item => Object.values(item)[0]
        );

    console.log('typesArrey:', typesArr)
}

//Generator functions - http:/www.net-comber.com/charset.html
//first we return a string from charcter code then ask
//for a random number that is rounded down and then multiply
//by 26 for the numbers in the abc's and finally add that to 
//the start number of the character code
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

/*console.log(getRandomSymbol());*/
