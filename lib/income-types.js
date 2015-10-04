'use strict';

export const hourly = 'hourly';
export const salary = 'salary';

function getHourlyInterface(income) {
    return {
        getDisplay() {
            return 'Hourly at ' + income.rate + '/hour';
        },
        getGross() {
            return (income.rate * 40 * 45) / 12;
        }
    };
};

function getSalaryInterface(income) {
    return {
        getDisplay() {
            return 'Salary at ' + income.wage + '/year';
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
