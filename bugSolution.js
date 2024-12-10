function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle non-number inputs appropriately
  }
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Or handle NaN as you see fit
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(NaN, 5)); // Output: NaN
console.log(foo(5, NaN)); // Output: NaN