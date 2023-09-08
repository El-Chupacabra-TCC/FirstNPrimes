import type { IPrimalityTestStrategy } from "./IPrimalityTestStrategy";

/**
 * Contains the default implementation of getFirstNPrimeNumbers.
 * @implements {IPrimalityTestStrategy}
 * @abstract
 */
export abstract class BasePrimalityTestStrategy implements IPrimalityTestStrategy {
    /**
     * @inheritdoc
     */
    getFirstNPrimeNumbers(n: number): number[] {
        const primes: number[] = [2];
        let currentNumber = 3;

        while (primes.length < n) {
            if (this.isPrime(currentNumber)) {
                primes.push(currentNumber);
            }
            currentNumber += 2;
        }

        return primes;
    }

    /**
     * @inheritdoc
     */
    abstract isPrime(num: number): boolean
}
