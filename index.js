let height = document.getElementById("height");
let weight = document.getElementById("weight");
let form = document.querySelector("form");
let score = document.querySelector(".score");
let bmiResult = document.querySelector(".bmi-result");

function calcBMI(w, h) {
  let bmi = w / (h / 100) ** 2;
  bmi = bmi.toFixed(2);
  score.innerHTML = bmi;
  let status = "";
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    status = "Healthy";
  } else if (bmi >= 25 && bmi < 29.9) {
    status = "Overweight";
  } else if (bmi >= 30 && bmi < 34.9) {
    status = "Obese";
  } else if (bmi >= 35 && bmi < 39.9) {
    status = "Highly Obese";
  } else if (bmi >= 40) {
    status = "Extremely Obese";
  }
  bmiResult.innerHTML = status;
}

height.addEventListener("keyup", () => {
  // replace input value with an empty value if user enters a string
  height.value = height.value.replace(/[a-z]/, "");
});

weight.addEventListener("keyup", () => {
  // replace input value with an empty value if user enters a string
  weight.value = weight.value.replace(/[a-z]/, "");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (weight.value !== "" && height.value !== "") {
    calcBMI(weight.value, height.value);
  }
});
