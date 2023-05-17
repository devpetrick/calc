const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
let resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "%",
];

document.querySelectorAll(".charKey").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus;
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList = "error";

  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

document
  .getElementById("copyToClipboard")
  .addEventListener("click", function () {
    const button = document.getElementById("copyToClipboard");
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList = "success";
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });

document.getElementById("ThemeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});
