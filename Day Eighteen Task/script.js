// The button element
const button = document.getElementById('changeText');
const descriptionElement = document.querySelector(".description");
const colors = ['#FA4032', '#006A67', 'green', '#FA812F', '#4B4376', 'orange', `#006A67`,`#526E48`, `#F6D6D6`, `#A1EEBD`];

// To generate a random color
function getRandomColor() {
    // Randomly select a color from the array
    return colors[Math.floor(Math.random() * colors.length)];
}

// Event listener to change the background color and text content on button click
button.addEventListener('click', () => {
    // Change the background color
    document.body.style.backgroundColor = getRandomColor();

    // Change the text content of the description
    descriptionElement.textContent = "Congratulations on Day 18! You just learned how to manipulate the DOM with JavaScript!";
});
