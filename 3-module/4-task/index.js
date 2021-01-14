/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
    let newArr = [];

    users.forEach(function(el) {
        if (el.age <= age) {
            newArr.push(el.name);
            newArr.push(el.balance);
        }
    });
    newArr = newArr.map(function(el) {
        let modified;
        let i = newArr.indexOf(el);
        if (i % 2 != 0 && i != newArr.length - 1) {
            modified = `${el}\n`;
        } else if (i == newArr.length - 1) {
            modified = el;
        } else {
            modified = `${el}, `
        }
        return modified;

    });

    let str = newArr.join('');
    return str;
}