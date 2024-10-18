"use strict";

/*1. Find Maximum in an Array
Write a function findMax(arr) that takes an array of 
numbers and returns the largest number in the array. 
Do not use built-in functions like Math.max().*/

const numbers = [20, 30, 10, 40, 60, 50, 70, 80];

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i > max]) {
      max = arr[i];
    }
    return max;
  }
}
console.log(findMax(numbers));

/*2. Frequency Counter
Write a function countOccurrences(arr) that takes an 
array of strings and returns an object where the keys 
are the strings and the values are the number of 
occurrences of each string.*/

const str = ["USA", "Canada", "Brazil", "USA", "France"];

function countOccurrences(arr) {
  const occurrence = {};

  arr.forEach((str) => {
    if (occurrence[str]) {
      occurrence[str]++;
    } else {
      occurrence[str] = 1;
    }
  });
  return occurrence;
}
console.log(countOccurrences(str));

/*3. Reverse a String
Write a function reverseString(str) that reverses the 
input string without using built-in string reversal 
methods (e.g., split().reverse()).*/

const arr = ["JavaScript", "Loves", "Owen"];

function reverseString(str) {
  let reversed = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed += arr[i];
  }
  return reversed;
}
console.log(reverseString(arr));

/*4. Array to Object
Write a function arrayToObject(arr) that takes an array 
of key-value pairs and returns an object. For example: 
arrayToObject([["name", "John"], ["age", 30]]) should 
return { name: "John", age: 30 }.*/

const arrToObj = [
  ["name", "Owen"],
  ["age", 26],
];

function arrayToObject(arr) {
  const object = {};

  arr.forEach(([key, value]) => {
    object[key] = value;
  });
  return object;
}
console.log(arrayToObject(arrToObj));

/*5. Palindrome Checker
Write a function isPalindrome(str) that checks whether 
a given string is a palindrome (a string that reads the 
same forwards and backwards). Ignore spaces and 
capitalization.*/

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}
console.log(isPalindrome("That house, was built by my brother"));

/*6. Remove Duplicates from Array
Write a function removeDuplicates(arr) that takes an 
array and returns a new array with all duplicates 
removed. Example: [1, 2, 2, 3, 4, 4, 5] should return 
[1, 2, 3, 4, 5].*/

const oldNumber = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates(oldNumber));

/*7. FizzBuzz with a Twist
Write a function fizzBuzzTwist(n) that prints numbers 
from 1 to n. For multiples of 3, print "Fizz", for 
multiples of 5, print "Buzz", and for multiples of both,
print "FizzBuzz". However, if a number is prime, print
"Prime" instead.*/

function fizzBuzzTwist(n) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      console.log("prime");
    } else {
      let output = "";
      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz";
      console.log(output || i);
    }
  }
}
fizzBuzzTwist(10);

/*8. Capitalize Words in a Sentence
Write a function capitalizeWords(sentence) that takes a 
sentence string and capitalizes the first letter of 
each word.*/

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(capitalizeWords("my name is owen, i'm learning javascript"));

/*9. Merge Two Sorted Arrays
Write a function mergeSortedArrays(arr1, arr2) that 
takes two sorted arrays and returns a single sorted 
array. Example: merging [1, 3, 5] and [2, 4, 6] should 
return [1, 2, 3, 4, 5, 6].*/

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSortedArrays(array1, array2));

/*10. Count Vowels in a String
Write a function countVowels(str) that takes a string 
and returns the number of vowels (a, e, i, o, u) in the 
string.*/

function countVowels(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((char) => "a, e, i, o, u".includes(char)).length;
}
console.log(countVowels("javascript"));

/*11. Find the Longest Word in a Sentence
Write a function findLongestWord(sentence) that takes 
a sentence and returns the longest word. If there are 
multiple words of the same length, return the first one.*/

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("My Name Is Owen, I'm Learning Javascript"));

/*12. Factorial with Iteration
Write a function factorialIterative(n) that calculates 
the factorial of a number n using a loop 
(instead of recursion).*/

function factorialIterative(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= 2;
  }
  return result;
}
console.log(factorialIterative(5));

/*13. Filter by Property
Write a function filterByProperty(arr, property, value) 
that takes an array of objects and filters the objects 
based on a property and value. Example: filtering by 
age for objects with age > 30.*/

const arrayObj = [
  { name: "Jude", age: 33 },
  { name: "Emma", age: 28 },
  { name: "Udeh", age: 46 },
];

function filterByProperty(arr, property, value, operator = "=") {
  const operators = {
    "=": (a, b) => a === b,
    ">": (a, b) => a > b,
    "<": (a, b) => a < b,
    ">=": (a, b) => a >= b,
    "<=": (a, b) => a <= b,
    "!=": (a, b) => a !== b,
  };
  return arr.filter((obj) => operators[operator](obj[property], value));
}

console.log(filterByProperty(arrToObj, "age:", 30, "="));

/*14. Find Intersection of Two Arrays
Write a function findIntersection(arr1, arr2) that 
returns a new array containing the common elements from 
both arrays.*/

const firstArr = [10, 5, 2, 1];
const secondArr = [3, 4, 5, 2];

function findIntersection(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}
console.log(findIntersection(firstArr, secondArr));

/*15. Array of Prime Numbers
Write a function getPrimeNumbers(n) that returns an 
array of all prime numbers up to n.*/

function getPrimeNumbers(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}
console.log(getPrimeNumbers(50));

/*16. Average of Array
Write a function average(arr) that takes an array of 
numbers and returns the average of all the numbers.*/

const numberAve = [1, 2, 3, 4];

function average(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}
console.log(average(numberAve));

/*17. Filter Long Words
Write a function filterLongWords(arr, minLength) that 
filters out words shorter than minLength from an array 
of words.*/

function filterLongWords(arr, minLength) {
  return arr.filter((key) => key.length >= minLength);
}

const words = ["My", "Name", "Is", "Owen", "Learning", "Javascript"];
console.log(filterLongWords(words, 4));

/*18. Generate a Fibonacci Sequence
Write a function fibonacci(n) that returns an array 
containing the first n numbers of the Fibonacci 
sequence (0, 1, 1, 2, 3, 5, 8...).*/

function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fibSequence = [0, 1];
    while (fibSequence.length < n) {
      fibSequence.push(
        fibSequence[fibSequence.length - 1] +
          fibSequence[fibSequence.length - 2]
      );
    }
    return fibSequence;
  }
}
console.log(fibonacci(10));

/*19. Check for Substring
Write a function hasSubstring(str, subStr) that checks 
whether subStr exists within str and returns true or 
false.*/

function hasSubstring(str, subStr) {
  return str.includes(subStr);
}
console.log(hasSubstring("My Name Is Owen", "Is"));

/*20. Sum of Odd Numbers in Array
Write a function sumOddNumbers(arr) that takes an array 
of numbers and returns the sum of all odd numbers in 
the array.*/

const numbs = [5, 4, 3, 2, 1];

function sumOddNumbers(arr) {
  return arr.reduce((sum, num) => (num % 2 !== 0 ? sum + num : sum), 0);
}
console.log(sumOddNumbers(numbs));

/*21. Count Words in a Sentence
Write a function countWords(sentence) that takes a 
sentence string and returns the total number of words.*/

function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}
const wrds = "Good sentence";
console.log(countWords(wrds));

/*22. Generate an Acronym
Write a function generateAcronym(phrase) that takes a 
phrase and returns its acronym (e.g., "National 
Aeronautics and Space Administration" should return 
"NASA").*/

function generateAcronym(phrase) {
  return phrase.match(/\b\w/g).join("").toUpperCase();
}
const acronym = "National Aeronautics and Space Administration";
console.log(generateAcronym(acronym));

/*23. Object Merging
Write a function mergeObjects(obj1, obj2) that merges 
two objects. If both objects have the same key, the 
value from obj2 should overwrite the value in obj1.*/

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
const obj1 = { a: 1, c: 3 };
const obj2 = { b: 2, d: 4 };
console.log(mergeObjects(obj1, obj2));

/*24. Count Digits in a Number
Write a function countDigits(num) that takes a number 
and returns the total number of digits in the number.*/

function countDigits(num) {
  return Math.abs(num).toString().length;
}
console.log(countDigits(12345678));

/*25. Chunk an Array
Write a function chunkArray(arr, size) that splits an 
array into chunks of a specified size. Example: 
chunkArray([1, 2, 3, 4, 5], 2) should return [[1, 2],
 [3, 4], [5]].*/

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5, 7, 8, 0], 2));
