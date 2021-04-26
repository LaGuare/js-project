const number = +prompt("Введите число от 0 до 4", "");
switch (number) {
  case 1:
  console.log(typeof number);
  alert("Вы ввели 1");
  break;
  case 2:
  console.log(typeof number);
  alert("Вы ввели 2");
  break;
  case 3:
  case 4:
  console.log(typeof number);
  alert("Вы ввели 3 или 4");
  break;
  default:
  console.log(typeof number);
  alert("Число не находится в промежутке 0 - 4, либо это не число!");
}