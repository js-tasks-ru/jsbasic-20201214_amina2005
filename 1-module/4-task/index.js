/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    let strToLower = str.toLowerCase();
    if (strToLower.includes('now') || strToLower.includes('xxx')) {
        return true;
    }
    return false;
}