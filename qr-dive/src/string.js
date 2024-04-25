// String Methods
// Here is a list of each method and its description.

// 1	charAt()
// Returns the character at the specified index.
// this is only sting method cannot be use in array

function chatAtExample() {
  let s = 'this is destop';
  console.log(s.length);
  console.log(1);
  console.log(s.charAt(14)); // it will return empty string if we give outOfIndex value
}
// -------------------------------------------------

// 2	charCodeAt()
// Returns a number indicating the Unicode value of the character at the given index.

function charCodeAtExample() {
  let str = 'destop';
  console.log(str.charCodeAt(1)); // return unicode of index 1
  console.log('v'.charCodeAt()); // return unicode of index 0 if no argument passed
}
// -------------------------------------------------

// 3	concat()
// Combines the text of two strings and returns a new string.

function concatExample() {
  let s1 = 'vipul ';
  let s2 = 'jain';

  console.log(s1.concat(s2));
}

// -------------------------------------------------

// 4	indexOf()
// Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.

function indexOfExample() {
  let s = 'vipul jain';
  console.log(s.indexOf);
}
// -------------------------------------------------

// 5	lastIndexOf()
// Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.

function lastIndexOf() {
  let s = 'vipul vipul';
  console.log(s.lastIndexOf('v'));
}
// -------------------------------------------------

// 6	localeCompare()
// Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
function localeCompareExample() {
  const str1 = 'apple';
  const str2 = 'banana';

  const result = str1.localeCompare(str2);
  console.log(result);
  if (result < 0) {
    console.log('str1 comes before str2'); // return -ve value
  } else if (result > 0) {
    console.log('str1 comes after str2'); // return +ve value
  } else {
    console.log('str1 and str2 are equal'); // return 0
  }
}
// -------------------------------------------------

// 7	length()
// Returns the length of the string.
function lengthExample() {
  let s = 'this';
  console.log(s.length);
}
// -------------------------------------------------

// 8	match()
// Used to match a regular expression against a string.

// -------------------------------------------------

// 9	replace()
// Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
// -------------------------------------------------

// 10	search()
// Executes the search for a match between a regular expression and a specified string.
// -------------------------------------------------

// 11	slice()
// Extracts a section of a string and returns a new string.

function sliceExample() {
  let s = 'how to become successfull';
  console.log(s.slice(1, 5));
}
// -------------------------------------------------

// 12	split()
// Splits a String object into an array of strings by separating the string into substrings.

function splitExample() {
  let s = 'this is the destop';
  console.log(s.split(' ')); // o/p - ['this', 'is', 'the', 'destop']
}
// -------------------------------------------------

// 13	substr()
// Returns the characters in a string beginning at the specified location through the specified number of characters.

// -------------------------------------------------

// 14	substring()
// Returns the characters in a string between two indexes into the string.
// -------------------------------------------------

// 15	toLocaleLowerCase()
// The characters within a string are converted to lower case while respecting the current locale.
// -------------------------------------------------

// 16	toLocaleUpperCase()
// The characters within a string are converted to upper case while respecting the current locale.
// -------------------------------------------------

// 17	toLowerCase()
// Returns the calling string value converted to lower case.
// -------------------------------------------------

// 18	toString()
// Returns a string representing the specified object.
// -------------------------------------------------

// 19	toUpperCase()
// Returns the calling string value converted to uppercase.
// -------------------------------------------------

// 20	valueOf()
// Returns the primitive value of the specified object.
// -------------------------------------------------
