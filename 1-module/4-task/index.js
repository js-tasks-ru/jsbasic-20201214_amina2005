 function checkSpam(str) {
    let strToLower = str.toLowerCase();
    if (strToLower.includes('now') || strToLower.includes('xxx'))
   {
   return true;
        }
    return false;
}
