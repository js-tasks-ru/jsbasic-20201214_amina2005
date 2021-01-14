/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '-') {
            arr[i + 1] = arr[i + 1].toUpperCase();
        }
    }

    let filteredArr = arr.filter((el) => {
        return el !== '-';
    });

    let finalArr = filteredArr.join('');


    return finalArr;
}