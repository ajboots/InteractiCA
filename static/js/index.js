// PAGE TRANSITIONS
// Right
// document.querySelector(".right.arrow").addEventListener("click", transitionRight);

// function goToNextPage() {
//   window.location.href = '/lesson1'
// }

// function transitionRight() {
//   document.querySelector(".content").classList.add('animation-right');
//   setTimeout(goToNextPage, 500);
// }

let images = ['/images/home-image-1.gif', '/images/home-image-2.gif'];

let index = 0;
let imgElement = document.getElementById('top-image');

function change() {
  console.log('changing to: ' + images[index]); 
  imgElement.style.backgroundImage = "url(" + images[index] + ")";
  index >= 1 ? index = 0 : index++;
}

window.onload = function() {
    setInterval(change, 5000);
};