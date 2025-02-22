"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValidator = exports.numberValidator = void 0;
function numberValidator(num) {
    return new NumberValidator(num);
}
exports.numberValidator = numberValidator;
class NumberValidator {
    constructor(num) {
        this.isInt = () => {
            if (Number.isInteger(this.n)) {
                return this;
            }
            throw new Error(`Expected number to be an integer, got ${this.n}`);
        };
        this.isPositive = () => {
            if (this.n > 0) {
                return this;
            }
            throw new Error(`Expected number to be positive, got ${this.n}`);
        };
        this.lessThan = (v) => {
            if (this.n < v) {
                return this;
            }
            throw new Error(`Expected number to be less than ${v}, got ${this.n}`);
        };
        this.greaterThanOrEqual = (v) => {
            if (this.n >= v) {
                return this;
            }
            throw new Error(`Expected number to be greater than or equal to ${v}, got ${this.n}`);
        };
        this.greaterThan = (v) => {
            if (this.n > v) {
                return this;
            }
            throw new Error(`Expected number to be greater than ${v}, got ${this.n}`);
        };
        this.n = num;
    }
}
exports.NumberValidator = NumberValidator;
