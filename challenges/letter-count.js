/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

function letterCount(phrase){
// Create empty object
let result = {};
// Split string into array of letters
let stringToArray = phrase.split("");

// Go thru array and for each letter, run the callback function (arrow)
stringToArray.forEach((letter) => {
    // If it exist in object, add 1 to the key
    if(result[letter]) {
      result[letter]++;
    }
    // If not, add letter and set value to 1
    else {
      result[letter] = 1;
    }

});
// Return object result
return result;

}
