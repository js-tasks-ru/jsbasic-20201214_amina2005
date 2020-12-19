 function checkSpam(str) {
    let strToLower = str.toLowerCase();
    if (strToLower.includes('now') || strToLower.includes('xxx'))
   {
   return true;
        }
    return false;
}

alert( checkSpam('1XbeT now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

