/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let arr = [];
    let interimArr = [];
    let objMinMax = {};

    str = str.replace(/ /g, ',');
    arr = str.split(',');

    arr.forEach(function(el) {
        let elNum = +el;
        if (elNum == 'NaN') {
            delete arr[el];
        } else if (el == '') {
            delete arr[el];
        } else if (elNum == el) {
            interimArr.push(elNum);
        }
        return interimArr;
    });

    let maxIn = Math.max(...interimArr);
    let minIn = Math.min(...interimArr);

    Object.assign(
        objMinMax, { min: minIn, max: maxIn }
    );

    return objMinMax;
}