// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let div = document.getElementById("modal");
div.className = "hidden";

let images = document.getElementsByClassName("like-glyph");
for (let image of images) {
  image.addEventListener("click", (e) => {
    mimicServerCall()
    .then(function(response) {
      if (response === "Pretend remote server notified of action!") {
        if (image.textContent === EMPTY_HEART) {
          image.textContent = FULL_HEART;
          image.className = "activated-heart";
        } else if (image.textContent === FULL_HEART) {
          image.textContent = EMPTY_HEART;
          image.classList.remove("activated-heart");
        }
      }
    })
    .catch(function(error) {
      div.classList.remove("hidden");
      div.textContent = error;
      setTimeout(function() {
        div.className = "hidden";
      }, 3000)
    })
    })
    
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
