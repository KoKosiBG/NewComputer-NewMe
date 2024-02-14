let button = document.getElementById("kiss")
let index = 0;
let isButtonMoving = false
button.addEventListener('mouseover', () => {
    if (!isButtonMoving && index === 0 || index === 1 || index === 2) {
        let randomX = getRandomInt(10, 80)
        let randomY = getRandomInt(10, 80)
        button.style.position = "absolute"
        button.style.top = randomY + "vh"
        button.style.left = randomX + "vw"
        button.style.transition = "0.7s"
        index++;
    }

    switch (index) {
        case 1:
            button.innerText = "Kiss me first"
            break;
            case 2:
                button.innerText = "Again"
                break;
                case 3:
            button.innerText = "Ok, last time"
            break;
    
        default:
            break;
    }
  });

  button.addEventListener('transitionstart', () => {
    isButtonMoving = true;
});

button.addEventListener('transitionend', () => {
    isButtonMoving = false;
});


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  document.addEventListener('DOMContentLoaded', function() {
    let backButton = document.getElementById("kiss");
    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        goBack();
    });
});

function goBack() {
    let previousPageURL = document.referrer;
    if (previousPageURL) {
        window.location.href = previousPageURL;
    } else {
        // If there is no referrer, go to the home page or any default page
        window.location.href = "index.html";
    }
}
  