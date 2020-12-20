/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

function isValid(name) {
if (name == "" || name == null){
return false;
} else if (name.lentgth<4){
  return false;
}
}


function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
