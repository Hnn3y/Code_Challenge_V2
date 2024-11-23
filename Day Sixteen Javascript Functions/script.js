// Adds the two numbers and returns the result
// function addNumbers(a, b) {
//    return a + b; 
// } 

// To call the function, use its name followed by parentheses:
// let result = addNumbers(5, 10);
// console.log(result);

function calculateSum() {
    // Get input values
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // Check if inputs are valid numbers
    // if (isNaN(num1) || isNaN(num2)) {
    //    alert("Please enter valid numbers!");
    //    return;
   //  }

    // Calculate sum
    let sum = num1 + num2;

    // Display result on the page
    document.getElementById("result").textContent = `${sum}`;
    onsubmit= "return false;"

    // alert(`The sum is: ${sum}`);
}
