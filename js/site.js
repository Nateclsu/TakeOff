
// Get the values from the Page
// Starts or controller function
function getValues() {
    //Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let numbers = [];

    startValue = parseInt(startValue);
    endValue = parseInt(endValue); 

    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //Call generateNumbers
        numbers = generateNumbers(startValue, endValue);
    }
    else {
        alert("You must enter integers.")
    }

    //Call displayNumbers
    displayNumbers(numbers); 
}


//Generate numbers from startValue to endValue
//Logic function(s)
function generateNumbers(sValue, eValue) {
    let numbers= [];

    for(let index = sValue; index <= eValue; index++) {
        //This will execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;

}

//Display the numbers and mark even numbers bold
//Display or view functions
function displayNumbers(numbers) {
    let templateRows = "";

    for(let index = 0; index < numbers.length; index++) {
        let className = "even";

        let number = numbers[index];

        if(number % 2 == 0) {
            className = "even";
        }
        else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}

