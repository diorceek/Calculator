const display = document.querySelector(".display p");
display.textContent = 0;

let f_n = ""; // first number
let s_n = ""; // second number
let sign = ""; // action
let finish = false;

const numberss = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

const action = ["+", "-", "*", "/", "%"];

//display

// clean

function Clean() {
  f_n = "";
  s_n = "";
  sign = "";
  finish = false;
  display.textContent = 0;
}

// cleaner button
document.querySelector(".ac").onclick = Clean;

// click buttons

document.querySelector(".numbers").onclick = (event) => {
  if (event.target.classList.contains(".number")) return;
  if (event.target.classList.contains(".ac")) return;

  // getting value

  const key = event.target.textContent.trim();

  // click numbers
  if (numberss.includes(key)) {
    if (s_n === "" && sign === "") {
      f_n += key;
      display.textContent = f_n;
    } else if (f_n != "" && s_n != "" && finish) {
      s_n = key;
      finish = false;
      display.textContent = f_n;
    } else {
      s_n += key;
      display.textContent = s_n;
    }
    return;
  }
  // click actions
  if (action.includes(key)) {
    sign = key;
    display.textContent = sign;
    return;
  }

  // click (=)

  if (key === "=") {
    if (s_n === "") s_n = f_n;
    switch (sign) {
      case "+":
        f_n = +f_n + +s_n;
        break;
      case "-":
        f_n = f_n - s_n;
        break;
      case "*":
        f_n = f_n * s_n;
        break;
      case "/":
        f_n = f_n / s_n;
        break;
      case "%":
        f_n = f_n % s_n;
        break;

      default:
        break;
    }
    finish = true;
    display.textContent = f_n;
  }
};
