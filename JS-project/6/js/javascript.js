let login = prompt("Кто там?", "");
if (login == "Джон" || login == "джон") {

  let password = prompt("Введите пароль", ""); {
    if (password == "админ" || password == "admin" || password == "Админ" || password == "админ") {
      let firstNum = 1;
      alert ("Здравствуй, Джон");
    } else if (password == "" || password == null) {
      alert ("Отмена");
    } else {
      let firstNum = 2;
      alert ("Неверный пароль!!!");
    }
  }
}

else if (login == "" || login == null) {
  alert ("Отмена");
} else {
  alert ("Я вас не знаю!");
}