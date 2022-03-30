// Codeland Username Validation
// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.
// Examples
// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true

function CodelandUsernameValidation(str) {

    // code goes here  
    if (str.length < 4 || str.length > 25) {
        //'It must have a minimum of 4 characters and a maximum of 25 characters.';
        return "false";
    }

    const firstLetter = str.charAt(0);

    if (!firstLetter.match(/[a-z]/i)) {
        //'It must have start with a letter';
        return "false";
    }

    if (!str.match(/[A-Za-z0-9_]*$/)) {
        //'It must have only letters nros and underscore';
        return "false";
    }

    const lastLetter = str[str.length - 1];

    if (lastLetter.match(/[_]/)) {
        //'The last letter cannot be underscore';
        return "false";
    }

    return "true";

}

// keep this function call here 
console.log(CodelandUsernameValidation(readline()));