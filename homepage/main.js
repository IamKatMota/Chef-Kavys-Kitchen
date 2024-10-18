//NAVIGATION
const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')

//keeps track of whether menu is open, using let bc its value can change from false to true
let menuOpen =  false

//tells our doc what to do when we open and close the menu

function openMenu(){
    menuOpen = true;
    overlay.style.display = 'block'
    sidebar.style.width = '250px'
}
function closeMenu(){
    menuOpen = false;
    overlay.style.display = 'none'
    sidebar.style.width = '0px'
}

//to make it run when you click the hamburger menu

hamburger.addEventListener('click', function(){
    //tests if menu open is false 
    if (!menuOpen) {
        openMenu()
    }
})

 //tests if menu open is true, if it is and you click on the overlay it will close the menu
overlay.addEventListener('click', function(){ 
    if (menuOpen) {
        closeMenu()
    }
})

//SLIDESHOW
let imgs = document.querySelectorAll('.slideshow img');
let currentImg = 0; //index of first img
const interval = 3000; //duration of the slide

//sets images' opacity to 0 and removes activ e from the dots' class list to reset the active slide
let timer = setInterval(changeSlide, interval);

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = 0;
      
    }

    currentImg = (currentImg + 1) % imgs.length;

    if (n != undefined) {
      clearInterval(timer);
      timer = setInterval(changeSlide, interval);
      currentImg = n;
    }

    imgs[currentImg].style.opacity = 1;
  }