document.getElementById("img").src="./Images/etN7RJzI_400x400.jpg";



// const titleElement = documnet.getElementById("date");
// document.addEventListener("DOMContentLoaded", () => {
    const descriptionElement = document.querySelector(".description");
    const button = document.getElementById("changeText");
    const changeImage= document.querySelector(".changeImage")  ;

    button.addEventListener("click", () => {
        descriptionElement.textContent = "Congratulations on Day 17! You just learned how to manipulate the DOM with JavaScript!";
        changeImage.src = "./Images/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg" ;
    });
// });
