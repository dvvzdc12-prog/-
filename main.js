let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];


let arr = users.find(cacl => cacl.id === 2);
console.log(arr); 


let arr2 = users.filter(cacl => cacl.id > 1);
console.log(arr2);