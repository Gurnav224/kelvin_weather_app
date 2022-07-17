// when user enter input  the value is converted from fahrenheit to celsius
let valNum;
function temperatureConverter(valNum){
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32)/1.8;
}