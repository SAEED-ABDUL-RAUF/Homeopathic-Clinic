// Hamburger fuctionalities
const hamburger = document.getElementById('hamburger');
function hamburgerFunction() {
  let navigations = document.getElementById('navigations');
  if (navigations.style.left == '-100%') {
    navigations.style.transition = '450ms'
    navigations.style.left = '0';
  } else {
    navigations.style.left = '-100%';
  }
}

hamburger.addEventListener('click',hamburgerFunction);

// About styling 

let about_one = document.getElementById('about_one');
let about_two = document.getElementById('about_two');
let about_three = document.getElementById('about_three');
let about_four = document.getElementById('about_four');


about_one.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("images/hh (1).jpg")';

about_two.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("images/b (1).jpg")';

about_three.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("images/image.jpg")';

about_four.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("images/f.jpg")';

//Advert card
let cancel = document.getElementById('cancel');
//event
cancel.addEventListener('click', () => {
  document.getElementById('advert').style.display = 'none';
})