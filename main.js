let user = {
  name: "John",
  age: 30
};

let input = prompt("Введите name или age");

if (input === "name") {
  alert(user.name);
} else if (input === "age") {
  alert(user.age);
} else {
  alert("Неверный ввод.");
}