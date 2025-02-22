"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (random, mu = 0, sigma = 1) => {
    return () => {
        let x, y, r;
        do {
            x = random.next() * 2 - 1;
            y = random.next() * 2 - 1;
            r = x * x + y * y;
        } while (!r || r > 1);
        return mu + sigma * y * Math.sqrt((-2 * Math.log(r)) / r);
    };
};
