function reverseString(word){
  const wordArray = word.split("");
  const reverseWordArray = wordArray.reverse();
  const reverseWord = reverseWordArray.join("");
  return reverseWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  // Need a function called isPalindrome that takes in a string argument
  // the function will return a true if the string argument is a palindrome (same work front & back)
  // the function will return false if the string argument is not a palindrome
  // Need to create a fnction that returns a true or false 
  const reverseWord = reverseString(word);
  if(word === reverseWord) {
    return true;
  } else {
    return false; 
  }

}

/* 
  Add your pseudocode here
// reverse the input string

// if the reversed string is the same as the input
  // return true
// else
  // return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // I expect calling isPalindrome to return true words
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: true"); 
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
