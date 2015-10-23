'use strict';

export const hourly = 'hourly';
export const salary = 'salary';

const currencyFormatter = new Intl.NumberFormat(undefined , {style: 'currency', currency: 'USD'});

let sharedDisplay = {
    getEmploymentType() {
        return this.income.employmentType;
    },
    getMonthlyGross() {
        return this.getYearlyGross() / 12;
    }
}

function getHourlyInterface(income) {
    return Object.assign({}, sharedDisplay, {
        income,
        getDisplay() {
            let rate = currencyFormatter.format(this.income.rate);
            return `Hourly ${rate}/hr`;
        },
        getYearlyGross() {
            let i = this.income;
            return i.rate * i.hoursPerWeek * i.weeksPerYear;
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
        getYearlyGross() {
            return income.wage;
        }
    });
};

export const typeInterfaces = {
    [hourly]: getHourlyInterface,
    [salary]: getSalaryInterface
};

export function fromData(rawIncome) {
    return typeInterfaces[rawIncome.type](rawIncome);
}
