'use strict';

export const hourly = 'hourly';
export const salary = 'salary';

const currencyFormatter = new Intl.NumberFormat(undefined , {style: 'currency', currency: 'USD'});

function getHourlyInterface(income) {
    return {
        getDisplay() {
            let rate = currencyFormatter.format(income.rate);
            return `Hourly ${rate}/hr`;
        },
        getGross() {
            return (income.rate * 40 * 45) / 12;
        }
    };
};

function getSalaryInterface(income) {
    return {
        getDisplay() {
            let wage = currencyFormatter.format(income.wage);
            return `Salary ${wage}/yr`;
        },
        getGross() {
            return income.wage / 12;
        }
    };
};

export const typeInterfaces = {
    [hourly]: getHourlyInterface,
    [salary]: getSalaryInterface
};
