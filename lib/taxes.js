'use strict';

export function federal(income) {
    // TODO Implement US Federal tax scale
    return income.getMonthlyGross() * 0.16;
}
