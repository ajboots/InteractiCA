// PAGE TRANSITIONS
// Right
document.querySelector(".right.arrow").addEventListener("click", transitionRight);

function goToNextPage() {
  window.location.href = '/lesson2';
}

function transitionRight() {
  document.querySelector(".content").classList.add('animation-right');
  setTimeout(goToNextPage, 500);
}

// Left
document.querySelector(".left.arrow").addEventListener("click", transitionLeft);

function goToPreviousPage() {
  window.location.href = '/lesson1.2';
}

function transitionLeft() {
  document.querySelector(".content").classList.add('animation-left');
  setTimeout(goToPreviousPage, 500);
}

// RULES CHALLENGE
let rules = [false, false, false, false, false, false, false, false];
let values = [128, 64, 32, 16, 8, 4, 2, 1];

document.querySelectorAll(".rules-button").forEach(button => {
  button.addEventListener("click", () => {
    let rule = button.id.charAt(4);
    if (rules[rule]) {
      rules[rule] = false;
      ruleOff(rule);
    } else {
      rules[rule] = true;
      ruleOn(rule);
    } 
  });
});

function ruleOn(ruleNumber) {
  document.getElementById("result" + ruleNumber).innerHTML = "◼︎";
  updateText();
}

function ruleOff(ruleNumber) {
  document.getElementById("result" + ruleNumber).innerHTML = "◻";
  updateText();
}

function updateText() {
  updateAddition();
  let rulesBinary = rules.join().replaceAll("true", "1").replaceAll("false", "0").replaceAll(",", "");
  document.getElementById('ruleIndicator').removeAttribute('hidden');
  document.getElementById('ruleNumber').innerHTML = parseInt(rulesBinary, 2);
}

function updateAddition() {
  let addition = "";
  for (let i = 0; i < rules.length; i++) {
    if (rules[i])
      addition = addition + values[i] + " + "; 
  }
  if (addition.length != 0) {
    addition = addition.slice(0, -3);
  } else {
    addition = "0";
  }
  document.getElementById('ruleAddition').innerHTML = addition;
}