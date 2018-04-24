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
