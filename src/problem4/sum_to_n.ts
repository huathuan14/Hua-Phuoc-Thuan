/**
 * Calculates the sum of integers from 1 to n using an iterative loop.
 * @param n - The number up to which the sum is calculated.
 * @returns The sum of integers from 1 to n.
 *
 * Time Complexity: O(n) - The loop iterates n times.
 * Space Complexity: O(1) - Uses a constant amount of extra space.
 */
function sum_to_n_iterative(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum; // Return the final sum.
}

/**
 * Calculates the sum of integers from 1 to n using the arithmetic series formula.
 * Formula: sum = (n * (n + 1)) / 2
 * @param n - The number up to which the sum is calculated.
 * @returns The sum of integers from 1 to n.
 *
 * Time Complexity: O(1) - Computes the result in constant time.
 * Space Complexity: O(1) - Uses a constant amount of extra space.
 */
function sum_to_n_formula(n: number): number {
    return (n * (n + 1)) / 2; // Directly calculate and return the sum using the formula.
}

/**
 * Calculates the sum of integers from 1 to n using recursion.
 * @param n - The number up to which the sum is calculated.
 * @returns The sum of integers from 1 to n.
 *
 * Time Complexity: O(n) - Makes n recursive calls.
 * Space Complexity: O(n) - Each recursive call adds a frame to the call stack.
 * Note: This method may cause a stack overflow for large values of n due to deep recursion.
 */
function sum_to_n_recursion(n: number): number {
    if (n <= 1) {
        return n; // Base case: if n is 1 or less, return n.
    }
    return n + sum_to_n_recursion(n - 1); // Recursive case: add n to the sum of (n-1).
}
