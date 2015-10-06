'use strict';

export const hourly = 'hourly';
export const salary = 'salary';

const currencyFormatter = new Intl.NumberFormat(undefined , {style: 'currency', currency: 'USD'});

let sharedDisplay = {
    getEmploymentType() {
        return this.income.employmentType;
    }
}

function getHourlyInterface(income) {
    return Object.assign({}, sharedDisplay, {
        income,
        getDisplay() {
            let rate = currencyFormatter.format(this.income.rate);
            return `Hourly ${rate}/hr`;
        },
        getGross() {
            return (this.income.rate * 40 * 45) / 12;
        }
    });
};

function getSalaryInterface(income) {
    return Object.assign({}, sharedDisplay, {
        income,
        getDisplay() {
            let wage = currencyFormatter.format(income.wage);
            return `Salary ${wage}/yr`;
        },
        getGross() {
            return income.wage / 12;
        }
    });
};

export const typeInterfaces = {
    [hourly]: getHourlyInterface,
    [salary]: getSalaryInterface
};
