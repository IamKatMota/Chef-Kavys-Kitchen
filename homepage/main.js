//NAVIGATION
const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')

let menuOpen =  false

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

hamburger.addEventListener('click', function(){
    if (!menuOpen) {
        openMenu()
    }
})

overlay.addEventListener('click', function(){ 
    if (menuOpen) {
        closeMenu()
    }
})

//SLIDESHOW
let imgs = document.querySelectorAll('.slideshow img');
let currentImg = 0; //index of first img
const interval = 3000; 

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

//form submission
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    try {
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        result.innerHTML = "Please wait..."

        let response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        let data = await response.json();

        if (response.ok){
            result.innerHTML = "Form submitted successfully";
        }else {
            result.innerHTML = data.message;
        }
    } catch (error) {
        console.error(error);
        result.innerHTML = "Something went wrong!";
    }finally {
        form.reset();
        setTimeout(() => { result.style.display = "none"; }, 3000);
    }
});