function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause unexpected behavior if either a or b is NaN
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(NaN, 5)); // Output: 0
console.log(foo(5, NaN)); // Output: 0