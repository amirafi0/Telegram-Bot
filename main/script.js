
const showElement = document.getElementById('show');
const increaseButton = document.getElementById('increase_button');

let currentValue = localStorage.getItem('counterValue');
if (currentValue === null) {
  currentValue = 100;
} else {
  currentValue = parseInt(currentValue, 10);
}

showElement.textContent = currentValue;

increaseButton.addEventListener('click', () => {
  currentValue += 10;
  showElement.textContent = currentValue;
  localStorage.setItem('counterValue', currentValue);
});

function bst(){
    alert("Comming SOON!");
}






// Set the date we're counting down to
let countDownDate = new Date("September 11, 2024 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);




function goBack() {
  window.history.back();
}
