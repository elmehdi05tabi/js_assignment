let add = document.querySelector(".classes-to-add");
add.addEventListener("blur", function (e) {
  e.preventDefault();
  let div = document.getElementById("div");
  let arr = add.value.split(" ");
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
      let span = document.createElement("span");
      span.classList = "sp";
      span.innerHTML = arr[i].toLowerCase();
      div.append(span);
    }
});
let remove = document.querySelector(".classes-to-remove");
remove.addEventListener("blur", function () {
    let sp1 = document.querySelectorAll(".sp");
    let arr2 = remove.value.split(" ");
    let div = document.getElementById("div");
    arr2.sort();
  for (let j = 0; j < arr2.length; j++) {
    for (let i = 0; i < sp1.length; i++) {
      if (arr2[j] === sp1[i].innerHTML) {
        sp1[i].remove();
      }
    }
  }
});
