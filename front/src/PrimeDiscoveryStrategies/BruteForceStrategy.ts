import { BasePrimalityTestStrategy } from "./BasePrimalityTestStrategy";

/**
 * Checks if a number n is prime dividing it by all integers between [2, n - 1] for any n > 1.
 */
export class BruteForceStrategy extends BasePrimalityTestStrategy {
    /**
     * @inheritdoc
     */
    isPrime(num: number): boolean {
        if (num <= 1) {
            return false;
        }

        const safeNum = Math.floor(num);

        for (let i = 2; i < safeNum; i++) {
            if (safeNum % i == 0) {
                return false;
            }
        }

        return true;
    }
}
