// PAGE TRANSITIONS
// Right
document.querySelector(".right.arrow").addEventListener("click", transitionRight);

function goToNextPage() {
  window.location.href = '/1D-Automata/ruleset-exploration'
}

function transitionRight() {
  document.querySelector(".content").classList.add('animation-right');
  setTimeout(goToNextPage, 500);
}

// Left
document.querySelector(".left.arrow").addEventListener("click", transitionLeft);

function goToPreviousPage() {
  window.location.href = '/1D-Automata/cells'
}

function transitionLeft() {
  document.querySelector(".content").classList.add('animation-left');
  setTimeout(goToPreviousPage, 500);
}

// RULES CHALLENGE
let rules = [false, false, false, false, false, false, false, false];
let answers = [false, false, false, true, true, true, true, false];

document.getElementsByClassName("rules-button").forEach(button => {
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
}

function ruleOff(ruleNumber) {
  document.getElementById("result" + ruleNumber).innerHTML = "◻";
}

let feedback = document.getElementById("check-feedback");
document.getElementById("check").addEventListener("click", () => {
  window.scrollBy(0, 50);
  if (JSON.stringify(rules) == JSON.stringify(answers)) {
    feedback.innerHTML = "Correct, that's rule 30!";
    feedback.classList.remove("incorrect");
    feedback.classList.add("correct");
  } else {
    feedback.innerHTML = "Not quite. Try again! Remember you can scroll up to see more generations of rule 30 for help. ";
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect")
  }
});