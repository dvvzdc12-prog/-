const user = {
  name: "Мухаммадзие",
  age: 14
};

const cacl = prompt("Введите name или age");
if (cacl == "name") {
  alert(user.name);
}
else if (cacl == "age") {
  alert(user.age);
}