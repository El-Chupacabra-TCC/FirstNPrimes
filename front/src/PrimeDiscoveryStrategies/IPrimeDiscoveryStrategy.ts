/**
 * Interface for prime number discovery strategies.
 * @interface
 */
export interface IPrimeDiscoveryStrategy {
    /**
     * Get the first 'n' prime numbers.
     *
     * @param n - The number of prime numbers to retrieve.
     * @returns An array of the first 'n' prime numbers.
     */
    getFirstNPrimeNumbers(n: number): number[];

    /**
     * Check if a number is prime.
     *
     * @param num - The number to check for primality.
     * @returns True if the number is prime, otherwise false.
     */
    isPrime(num: number): boolean;
}
