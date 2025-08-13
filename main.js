function checkNumber() {
  const userInput = prompt("Введите число:");
  if (userInput === null) {
   
    return;
  }

  const num = Number(userInput);

  if (isNaN(num)) {
    alert("Введите только числа");
  } else if (num % 2 === 0) {
    alert("четное");
  } else {
    alert("нечетное");
  }
}

checkNumber()