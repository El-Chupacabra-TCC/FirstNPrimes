import bigInt from "big-integer";
import { BasePrimalityTestStrategy } from "./BasePrimalityTestStrategy";

/**
 * Implementation using bn.js library.
 * Lib: https://www.npmjs.com/package/bn.js
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
