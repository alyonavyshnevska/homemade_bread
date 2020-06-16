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

    const imgId = e.target.src.slice(-6, -5);

    const d='http://127.0.0.1:5000/data/'.concat(imgId);

fetch(d)
.then(
    function(response) {

      // communicate error to user
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json() // Define response type (JSON, Headers, Status codes)
        .then(function(data) {  // get the response type 

          document.getElementById('content').innerHTML = data.name.concat(' : ').concat(data.link);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

}

//Destructuring way in js
// const [current,imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
