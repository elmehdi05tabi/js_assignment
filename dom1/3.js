let mydolar = document.querySelector("input") ; 
let resulta = document.querySelector("div"); ; 
mydolar.onclick = function() {
    var dollar = mydolar.value * 10.11 ;
    resulta.textContent = `{${mydolar.value}} USD Dollar = {${dollar} Morrocan Dirham}` ; 
}
