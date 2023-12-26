const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value);
}


generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}


// Explanation:

// Character Sets:

// upperSet, lowerSet, numberSet, and symbolSet are sets of characters that can be included in the generated password.
// Selectors:

// passBox, totalChar, upperInput, lowerInput, numberInput, and symbolInput are references to HTML elements using their IDs.
// getRandomData function:

// Takes a character set as an argument and returns a random character from that set.
// generatePassword function:

// Builds a password based on user-selected character sets and desired length.
// Recursively calls itself if the generated password is shorter than the desired length.
// Displays the generated password in the HTML element with the ID "pass-box", truncating it if necessary.
// Initial Generation:

// Calls generatePassword() to generate an initial password when the page loads.
// Event Listener:

// Listens for a click event on the button with the ID "btn" and generates a new password when clicked.
// truncateString function:

// Takes a string and a specified length (num).
// If the string is longer than the specified length, truncates the string; otherwise, returns the original string.