let user = {
  name: "имя,
  age: 15
};

let prom = prompt("Введите name или age");

if (prom == "name") {
  alert(user.name);
} else if (prom == "age") {
  alert(user.age);
} else {
  alert("Такого свойства нет");
}