const btn = document.getElementById("btn");
const root = document.getElementById("root");

btn.addEventListener("click", () => {
  const text = document.createElement("p");
  text.textContent = "Новое сообщение!";
  root.appendChild(text);
});