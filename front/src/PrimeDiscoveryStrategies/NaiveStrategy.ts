import { BasePrimalityTestStrategy } from "./BasePrimalityTestStrategy";

/**
 * Implementation of the IPrimeDiscoveryStrategy based on Wikipedia and a Chat GPT answer.
 * Wikipedia source: https://en.wikipedia.org/wiki/Primality_test
 */
export class NaiveStrategy extends BasePrimalityTestStrategy {
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
