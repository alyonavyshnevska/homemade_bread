const d='http://127.0.0.1:5000/data';

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
        console.log(data);
        const contentContainer = document.getElementById("content");
        const contentContainer2 = document.getElementById("content");
        // contentContainer.appendChild
        for (let item of data) {
            const header = document.createElement("h3");
            header.innerText = item.name;
            contentContainer.appendChild(header);
            const header2 = document.createElement("p");
            header2.innerText = item.date; 
            contentContainer2.appendChild(header2);
        }
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });