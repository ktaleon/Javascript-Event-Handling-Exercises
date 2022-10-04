let convertButton = document.getElementById("convert")

convertButton.addEventListener("click",function(){
    convertToFahrenheit();
})

function convertToFahrenheit(){
    let celsius = document.getElementById("celsius").value;

    document.getElementById("fahrenheit").innerHTML = (celsius)*(9/5)+32;
}