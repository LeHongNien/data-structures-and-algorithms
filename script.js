const checkBtn = document.getElementById('check-btn');
const myResult = document.getElementById('result');

function removeNonAlphanumericThenLower(str) {
    // remove non-alphanumeric & lower case all
    let lettersLowerOnly = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return lettersLowerOnly;
}

function palindromeCheck() { 
    let textInput = document.getElementById('text-input').value;
    if (textInput === '') {
        alert("Please input a value");
    }

    let textInputAL = removeNonAlphanumericThenLower(textInput);
    let reversedTextInputAL = textInputAL.split("").reverse().join("");
    let isPalindrome = textInputAL === reversedTextInputAL
    if (isPalindrome) {
        myResult.innerHTML = `${textInput} is a palindrome`;
    } else {
        myResult.innerHTML = `${textInput} is not a palindrome`;
    }
}

checkBtn.addEventListener("click", palindromeCheck);