import bigInt from "big-integer";
import { BasePrimalityTestStrategy } from "./BasePrimalityTestStrategy";

/**
 * Implementation using big-integer library.
 * Lib: https://www.npmjs.com/package/big-integer
 */
export class MillerRabinStrategy extends BasePrimalityTestStrategy {
    /**
     * @inheritdoc
     */
    isPrime(num: number): boolean {
        const safeNum = Math.floor(num)
        return bigInt(safeNum).isProbablePrime()
    }
}
