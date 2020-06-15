// select main large img
const current = document.querySelector('#current');
// select the imgs class and all imgs inside it. returns node list
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;


// set opacity of first current img
imgs[0].style.opacity = opacity;

// loop through imgs and add event listener to all of them
imgs.forEach(img => img.addEventListener('click', imgClick));

// e is event
function imgClick(e) {

    // on click set the current large to the source of clicked img
    current.src = e.target.src;

    // Add fade-in class to add imgs
    current.classList.add('fade-in')

        // Remove fade-in class after its used, so when a new img becomes 
    // current it will do the fadein again
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Reset the opacity of all imgs
    imgs.forEach(img => (img.style.opacity = 1));

    // change opacity var
    e.target.style.opacity = opacity;

}

//Destructuring way in js
// const [current,imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
