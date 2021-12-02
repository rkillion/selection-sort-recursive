function selectionSortRecursive(arr) {
  // sort an array of numbers- recall the function until the array has been sorted
  // move the first out-of-place number of the array until no numbers are out of place
  let n=0;
  while (n<arr.length&&arr[n]<=arr[n+1]) {
    n++;
  }
  debugger;
  return n>=arr.length-1 ? arr : selectionSortRecursive([...arr.slice(0,n),arr[n+1],arr[n],...arr.slice(n+2)]);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.time("runtime");
  console.log(selectionSortRecursive([3, -1, 5, 2]));
  console.timeEnd("runtime");

  console.log("");

  console.log("Expecting: [5]");
  console.time("runtime");
  console.log(selectionSortRecursive([5]));
  console.timeEnd("runtime");

  console.log("");

  console.log("Expecting: [-1, 2, 2, 3, 3, 5]");
  console.time("runtime");
  console.log(selectionSortRecursive([3, 2, -1, 3, 5, 2]));
  console.timeEnd("runtime");

  console.log("");

  console.log("Expecting: [3, 5]");
  console.time("runtime");
  console.log(selectionSortRecursive([5, 3]));
  console.timeEnd("runtime");

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
