document.forms[0].style.display = "flex" ; 
document.forms[0].style.flexDirection = "column" ; 
document.forms[0].style.justifyContent = "center" ; 
document.forms[0].style.height = "100vh" ; 
document.forms[0].style.alignItems = "center" ; 
document.forms[0].style.margin = "auto" ; 
let input = document.querySelectorAll("input") ; 
for (let i = 0 ; i<input.length ;i++) {
  input[i].style.border = "none" ; 
  input[i].style.background = "#0000001a"; 
  input[i].style.borderRadius = "5px"; 
  input[i].style.textAlign = "center"; 
  input[i].style.marginTop = "1rem"; 
  input[i].style.padding = "10px"; 
  input[i].style.width = "300px"; 
}
let select = document.getElementsByTagName("select") ; 
select[0].style.width = '300px' ; 
select[0].style.padding = '10px' ; 
select[0].style.marginTop = '10px' ; 
let create = document.querySelector("[name='create']");
let result = document.querySelector(".results");
result.style.display = 'flex' ; 
result.style.width  = '90%' ; 
result.style.margin  = 'auto' ; 
create.addEventListener("click", function (event) {
  event.preventDefault();
  let numberElments = document.querySelector("[name='elements']");
  let texts = document.querySelector("[name='texts']");
  let typeElements = document.querySelector("select");
  // console.log(numberElments.value) ;
  // console.log(texts.value);
  // console.log(typeElements);
  // console.log(result);
  for (let i = 0; i < numberElments.value; i++) {
    if (typeElements.value === "Div") {
      let div = document.createElement("div");
      div.textContent = texts.value;
      div.style.background = 'orange'; 
      div.style.width = "" ; 
      div.style.padding = "10px" ; 
      div.style.color = "white" ; 
      div.style.color = "white" ; 
      div.style.borderRadius = "6px" ; 
      result.appendChild(div);
      result.style.flexWrao = 'wrap' ; 
    } else {
        let sect = document.createElement("section");
        sect.textContent = texts.value;
        sect.style.background = "orange"; 
      result.appendChild(sect);
    }
  }
});
