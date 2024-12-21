let r = document.querySelector(".rock");
let p = document.querySelector(".paper");
let s = document.querySelector(".scissor");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let result = document.querySelector(".result");

r.addEventListener("click", (fn) => {
  let val = 3;
  box1.innerHTML = "";
  let r1 = r.cloneNode(true);
  box1.appendChild(r1);

  display(val, go());
});
p.addEventListener("click", (fn) => {
  val = 4;
  box1.innerHTML = "";
  let p1 = p.cloneNode(true);
  box1.appendChild(p1);

  display(val, go());
});
s.addEventListener("click", (fn) => {
  val = 5;
  box1.innerHTML = "";
  let s1 = s.cloneNode(true);
  box1.appendChild(s1);

  display(val, go());
});
function go() {
  let cval = Math.floor((Math.random() + 1) * 3);
  if (cval === 3) {
    box2.innerHTML = "";
    r1 = r.cloneNode(true);
    box2.appendChild(r1);
  } else if (cval === 4) {
    box2.innerHTML = "";
    p1 = p.cloneNode(true);
    box2.appendChild(p1);
  } else {
    box2.innerHTML = "";
    s1 = s.cloneNode(true);
    box2.appendChild(s1);
  }
  return cval;
}
function display(val, cval) {
  if (
    (val == 3 && cval == 5) ||
    (val == 4 && cval == 3) ||
    (val == 5 && cval == 4)
  ) {
    result.textContent = "you win";
  } else if (val == cval) {
    result.textContent = "draw";
  } else {
    result.textContent = "you loose";
  }
}
