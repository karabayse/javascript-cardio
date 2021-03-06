console.log('in client.js');

// REVERSE A STRING
// example:  reverseString('hello') === 'olleh'

function reverseString(str) {
  // splits the string into an array
  const strArr = str.split('');
  console.log(strArr);
  // reverses the order of the array
  strArr.reverse();
  console.log(strArr);
  // joins the elements of an array into a string
  return strArr.join('');
}

const output = reverseString('Hello');
console.log(output);

// simpler alternative
function reverseString2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

const output2 = reverseString2('Hello');
console.log(output2);

// decrementing for loop
function reverseString3(str) {
  let revString = '';
  for (let i = str.length -1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
}

const output3 = reverseString3('Hello');
console.log(output3);

// incrementing for loop
function reverseString4(str) {
  let revString = '';
  for (let i = 0; i <= str.length -1; i++) {
    revString = str[i] + revString;
  }
  return revString;
}

const output4 = reverseString4('Hello');
console.log(output4);

// for of loop
function reverseString5(str) {
  let revString = '';
  for(let char of str) {
    revString = char + revString;
  }
  return revString;
}

const output5 = reverseString5('Hello');
console.log(output5);

// higher order array:  forEach loop
function reverseString6(str) {
  let revString = '';
  str.split('').forEach(function(char) {
    revString = char + revString;
  });
  return revString;
}

const output6 = reverseString6('Hello');
console.log(output6);

// higher order:  reduce
function reverseString7(str) {
  return str.split('').reduce(function(revString, char) {
    return char + revString;
  }, '');
}

const output7 = reverseString7('Hello');
console.log(output7);



// VALIDATE A PALINDROME
// Return true if palindrome and false if not

function isPalindrome(str) {
  const revString = str.split('').reverse().join('');
  return revString === str;
}

const output8 = isPalindrome('racecar');
console.log(output8);



// REVERSE AN INTEGER

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(int);
}

const output9 = reverseInt(-123);
console.log(output9);


// CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized

function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(' ');

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(' ');
}

const output10 = capitalizeLetters('i love javascript');
console.log(output10);


function capitalizeLetters2(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    console.log(word);
    return word[0].toUpperCase() + word.substr(1);
  })
  .join(' ');
}

const output11 = capitalizeLetters2('I love javaScript');
console.log(output11);


function capitalizeLetters3(str) {
  // regular expression:  between / /
  // boundary:  \b
  // range:  [a-z]
  // g:  global
  // i:  case insensitive
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase;
  });
}

const output12 = capitalizeLetters3('i Love javascript');
console.log(output12);



// MAX CHARACTER
// Return the character that is most common in a string

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1;
    }
  });
  for(let char in charMap) {
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

const output13 = maxCharacter('javascript');
console.log(output13);



// FIZZBUZZ

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
    // or, if(i % 15 === 0), because anything with a
    // multiple of 15 is also a multiple of both 3 and 5
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

const output14 = fizzBuzz();



// LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array

function longestWord(sen) {
  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  console.log(wordArr);
  // Sort by length
  const sorted = wordArr.sort(function(a, b) {
      return b.length - a.length;
    });
    // If multiple words, put into array
    const longestWordArr = sorted.filter(function(word) {
      // Returns true or false
      return word.length === sorted[0].length;
    });
    // Check if more than one array value
    if(longestWordArr.length === 1) {
      // Return the word
      return longestWordArr[0];
    } else {
      return longestWordArr;
    }
  }

const output15 = longestWord('Hello there, my name is Kara');
console.log(output15);



// ARRAY CHUNKING
// Split an array into chunked arrays of a specific length

function chunkArray(arr, len) {
  // Initialize a chunked array
  const chunkedArr = [];
  // Set index for while loop
  let i = 0;
  // Loop while index is less than array length
  while(i < arr.length) {
    // Slice out from the index to the index + chunk length
    // Push on to chunked array
    chunkedArr.push(arr.slice(i, i + len));
    // Increment by chunk length
    i += len;
  }
  return chunkedArr;
}
                                                // Chunks with 2 values
const output16 = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);
console.log(output16);


function chunkArray2(arr, len) {
  // Initialize chunked array
  const chunkedArr2 = [];
  // Loop through array
  arr.forEach(function(val) {
    // Get last element
    const last = chunkedArr2[chunkedArr2.length -1];
    // Check if there is a last, and if last length is equal to chunk length
    if(!last || last.length === len) {
      chunkedArr2.push([val]);
    } else {
      last.push(val);
    }
    console.log(chunkedArr2);
    console.log(last);
  });
  return chunkedArr2;
}
                                                  // Chunks with 3 values
const output17 = chunkArray2([1, 2, 3, 4, 5, 6, 7], 3);
console.log(chunkArray2);



// FLATTEN ARRAY
// Take an array of arrays and turn it into a single array

function flattenArray(arrays) {
  return arrays.reduce(function(a, b) {
    return a.concat(b);
  });
}

const output18 = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
console.log(output18);


function flattenArray2(arrays) {
  return [].concat.apply([], arrays);
}

const output19 = flattenArray2([[1, 2], [3, 4], [5, 6], [7]]);
console.log(output19);


function flattenArray3(arrays) {
                // spread
  return [].concat(...arrays);
}

const output20 = flattenArray3([[1, 2], [3, 4], [5, 6], [7]]);
console.log(output20);



// ANAGRAM
// Return true if anagram and false if not

function isAnagram(str1, str2) {
  console.log(formatStr(str1));
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

const output21 = isAnagram('Dormitory', 'dirty room##!!');
console.log(output21);



// LETTER CHANGES
// Change every letter of a string to the one that follows it alphabetically
// Capitalize vowels
// Z should turn to A

function letterChanges(str) {
  let newStr = str.replace(/[a-z]/gi, function(char) {
    if(char === 'z' || char === 'Z') {
      return 'a';
    } else {
                    // every letter in the alphabet has a character code
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });
  return newStr;
}

const output22 = letterChanges('zebra stripes');
console.log(output22);
