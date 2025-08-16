function checkNumber() {
  const numStr = prompt("Введите число:");
  if (numStr === null) {
    return ;
  }

  const num = Number(numStr);

  if (isNaN(num)) {
    alert("Введите только числа");
  } else if (num % 2 === 0) {
    alert("четное");
  } else {
    alert("нечетное");
  }
}

checkNumber();