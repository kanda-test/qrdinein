// array methods

// 1. length

function lengthExample() {
  let arr = [40, 20, 20, 20];
  console.log(arr.length); // o/p - 4
}

// 2. toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

function toStringExample() {
  let arr = ['python', 'django', 'javascript', 'node'];
  console.log(arr.toString());
  console.log(arr); // it do not change original array always return new string
}

// 3. at()

// return element of the array by taking index as input in parameter

function atExample() {
  let arr = [10, 20, 30, 40, 50];
  console.log(arr.at(2));
}

// 4. join()
// The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator by giving it in paramenter

function joinExample() {
  let arr = [10, 20, 'vipul'];
  console.log(arr.join('__')); // o/p - 10__20__vipul
}

// 5. pop()
// The pop() method removes the last element from an array
function popExample() {
  let arr = [10, 20, 30, 40];
  arr.pop();
  console.log(arr);
}

// 6. push()
// The push() method adds a new element to an array (at the end):

function pushExample() {
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  console.log(fruits.push('Kiwi'));
  // The push() method returns the new array length

  console.log(fruits);
}
// pushExample();

// 7. shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
function shiftExample() {
  let nums = [10, 20, 30, 40, 50];
  console.log(nums.shift()); //The shift() method returns the value that was "shifted out":
  console.log(nums);
}

// shiftExample();

//8  unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
function unshiftExample() {
  const nums = [20, 30, 40, 5, 0];
  console.log(nums.unshift(10)); //The unshift() method returns the new array length:
  console.log(nums);
}

// 9 delete()
//Using delete() leaves undefined holes in the array.

function deleteExample() {
  let nums = [10, 20, 30, 40, 50];
  delete nums[2];
  console.log(nums); // [ 10, 20, <1 empty item>, 40, 50 ]
}

// 10. concat()
//The concat() method creates a new array by merging (concatenating) existing arrays:

function concat() {
  const myGirls = ['Cecilie', 'Lone'];
  const myBoys = ['Emil', 'Tobias', 'Linus'];

  const myChildren = myGirls.concat(myBoys);

  console.log(myChildren);
}

// 11. splice()
// The splice() method adds new items to an array.
// The splice() method can be used to add new items to an array:
function spliceExample() {
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  fruits.splice(2, 0, 'Lemon', 'Kiwi');
  console.log(fruits);
  console.log(fruits.splice(2, 2)); // remove two element from starting second index and give o/p of removed element
  console.log(fruits);
  // The first parameter (2) defines the position where new elements should be added (spliced in).
  // The second parameter (0) defines how many elements should be removed.
  // The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
  // The splice() method returns an array with the deleted items:
}

// 12. toSpliced()

// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

function toSplicedExample() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr'];
  const spliced = months.toSpliced(0, 1);
  console.log(spliced);
  console.log(months);
}

// 13.  slice() method can take two arguments like slice(1, 3).

// The method then selects elements from the start argument, and up to (but not including) the end argument.

function sliceExample() {
  const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
  const citrus = fruits.slice(1, 3); // ['Orange', 'Lemon']
  console.log(citrus);
}
// sliceExample();

// -------------------------------------------------------------------

// find methods

// //          1. find()
// The find() method in JavaScript is used to retrieve the first element in an array that satisfies a specified condition

// it take callback function

function findExample() {
  const arr = [10, 20, 30, 40, 50];

  console.log(arr);

  const res = arr.find(function (element, index, arr) {
    console.log(element, index, arr);
    if (element > 30) {
      return element;
    }
  });

  // alternative by using arrow function
  console.log(arr.find((x) => x > 30));

  console.log(res);
}

// findExample();

// findLast
//The findLastIndex() method finds the index of the last element that satisfies a condition.

// findIndex()
//  findIndex() method returns the index of the first array element that passes a test function.

//2.  findLastIndex()
// The findLastIndex() method finds the index of the last element that satisfies a condition.

// 3. indexOf()
// The indexOf() method searches an array for an element value and returns its position
function indexOfExample() {
  console.log(['a', 'b', 'c', 'c'].indexOf('c'));
}

// note :- Array.indexOf() returns -1 if the item is not found.

// 4. lastIndexOf()
function lastIndexOfExample() {
  console.log(['a', 'b', 'c', 'c'].lastIndexOf('c'));
}

//5. includes()
// return true and false value based on giving paramenter is found on the array or not

function includesExample() {
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

  console.log(fruits.includes('Mango'));
  // is true
}
