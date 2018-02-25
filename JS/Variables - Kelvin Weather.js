//Constant value
let kelvin ='294';
//Celsius=kelvin-273
const celsius = kelvin - 273;
//Fahrenheit
let fahrenheit = celsius *  (9/5) + 32;
//Redondear fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);

kelvin = prompt('What is the Kelvin temperature today?');