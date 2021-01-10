/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

function sumSalary(salaries) {
    delete salaries["month"];
    delete salaries["currency"];
    delete salaries["isPayed"];

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
}