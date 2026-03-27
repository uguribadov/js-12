const symbol = (function () {
    const firstSymbol = prompt("birinci sembolu girin:");
    const secondSymbol = prompt("ikinci sembolu girin:");

    if (firstSymbol === secondSymbol) {
        return "eynidir";
    } else {
        return "ferqlidir";
    }
})();

alert(symbol);

function number(num){
    if (num % 5 === 0){
        return "5-e bolunur";
    }else {
        return "5-e bolunmur";
    }
}
number(prompt("bir eded veya"))