import { BasePrimalityTestStrategy } from "./BasePrimalityTestStrategy";

/**
 * Implementation of the IPrimeDiscoveryStrategy interface created by GPT-3.5.
 */
export class ChatGptStrategy extends BasePrimalityTestStrategy {
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
