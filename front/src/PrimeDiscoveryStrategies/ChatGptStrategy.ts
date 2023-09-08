import type { IPrimalityTestStrategy } from "./IPrimalityTestStrategy";

/**
 * Implementation of the IPrimeDiscoveryStrategy interface created by GPT-3.5.
 */
export class ChatGptStrategy implements IPrimalityTestStrategy {
    /**
     * @inheritdoc
     */
    getFirstNPrimeNumbers(n: number): number[] {
        const primes: number[] = [];
        let currentNumber = 2;

        while (primes.length < n) {
            if (this.isPrime(currentNumber)) {
                primes.push(currentNumber);
            }
            currentNumber++;
        }

        return primes;
    }

    /**
     * @inheritdoc
     */
    isPrime(num: number): boolean {
        if (num <= 1) {
            return false;
        }
        if (num <= 3) {
            return true;
        }
        if (num % 2 === 0 || num % 3 === 0) {
            return false;
        }

        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
            i += 6;
        }

        return true;
    }
}
