//const Themetogglebutton = document.getElementById(`Theme-toggle`);
//const bodyElement = document.body;

//Themetogglebutton.addEventListener(`click`, function() {
   // bodyElement.classList.toggle(`dark`);
    //bodyElement.classList.toggle(`light`);

   // if (bodyElement.classList.contains(`dark`)) {
       // Themetogglebutton.textContent=`switch to light mode`;
       // Themetogglebutton.classList.add(`dark`);
//} else {
       // Themetogglebutton.textContent=`Switch to dark mode`;
       // Themetogglebutton.classList.remove(`dark`);
   // }
// }); 

// Get the toggle button and body element
const themeToggleButton = document.getElementById("theme-toggle");
const bodyElement = document.body;

// Add event listener to toggle themes
themeToggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
    bodyElement.classList.toggle("light");

    // Update button text based on current theme
    if (bodyElement.classList.contains("dark")) {
        themeToggleButton.textContent = "Switch to Light Mode";
        themeTogglebutton.classList.add(`dark`);
    } else {
        themeToggleButton.textContent = "Switch to Dark Mode";
        themeTogglebutton.classList.remove(`dark`);

    }
});
