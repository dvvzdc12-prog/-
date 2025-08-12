let name = prompt("Введите ваше имя");

if (name) {
  let index = confirm("Вам есть 18?");

  if (index) {
    alert("Вы приняты " + name );
  } else {
    alert("Вы нам не подходите");
  }
} else {
    alert("Вы не ввели имя");
}