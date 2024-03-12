// Lesson: Writing your first tests
export function max(a, b) {
  return a >= b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

/**
 *
 * Factorial Number JavaScript while
 */
export function factorialNumber(n) {
  if (n < 0) return undefined;
  let factorialTotal = 1;
  while (n >= 1) {
    factorialTotal *= n;
    n--;
  }
  return factorialTotal;
}

/**
 *
 * Factorial Number JavaScript Recursion

export function factorialNumber(n) {
  if (n < 0) return undefined;
  if (n === 0) {
    return 1;
  } else {
    return factorialNumber(n - 1) * n;
  }
}
 */
