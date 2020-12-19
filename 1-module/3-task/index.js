function ucfirst(str) {
let at = str.charAt(0).toUpperCase();
return at + str.substr(1, str.length-1);
}
alert(ucfirst('вася'));
