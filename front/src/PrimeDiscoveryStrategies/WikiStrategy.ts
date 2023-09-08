import type { IPrimalityTestStrategy } from "./IPrimalityTestStrategy";

/**
 * Implementation using isPrime function from Wikipedia.
 * Source: https://en.wikipedia.org/wiki/Primality_test
 */
export class WikiStrategy implements IPrimalityTestStrategy {
    /**
     * @inheritdoc
     */
    getFirstNPrimeNumbers(n: number): number[] {
        const primes: number[] = []

        for (let i = 0; primes.length < n; i++) {
            if (this.isPrime(i)) {
                primes.push(i)
            }
        }

        return primes;
    }

    /**
     * @inheritdoc
     */
    isPrime(num: number): boolean {
        num = Math.floor(num)

        if (num <= 3 || num == 7) {
            return num > 1
        }

        if (num % 2 == 0 || num % 3 == 0 || num % 7 == 0) {
            return false
        }

        for (let j = 5; j < Math.floor((num ** 0.5) + 1); j += 6) {
            if (num % j == 0 || num % (j + 2) == 0) {
                return false
            }
        }

        return true
    }
}
