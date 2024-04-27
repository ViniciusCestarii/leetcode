function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1;
    }

    if (x === 1 || x === 0) {
        return x;
    }
    
    // Handle negative exponent by using reciprocal
    const isNegative = n < 0;
    let absN = Math.abs(n);

    let result = 1;
    let base = x;

    while (absN > 0) {
        if (absN % 2 === 1) {
            result *= base; // If `n` is odd, multiply the result by `base`
        }
        base *= base; // Square the base
        absN = Math.floor(absN / 2); // Divide `n` by 2 (integer division)
    }

    return isNegative ? 1 / result : result;
}