function task31() {
  const userNumber = parseInt(prompt("Введіть число:"));
  const output = document.getElementById("output");
  output.innerHTML = "";

  for (let i = 1; i <= 100; i++) {
      if (i % userNumber === 0) {
          output.innerHTML += i + "<br>";
      }
  }
}

function task32() {
  const minRange = parseInt(prompt("Введіть мінімальне значення діапазону:"));
  const maxRange = parseInt(prompt("Введіть максимальне значення діапазону:"));
  const output = document.getElementById("output");
  output.innerHTML = "";

  for (let i = minRange; i <= maxRange; i += 4) {
      output.innerHTML += i + "<br>";
  }
}

function task33() {
  let A = parseInt(prompt("Введіть число A:"));
  let B = parseInt(prompt("Введіть число B:"));
  const output = document.getElementById("output");
  output.innerHTML = "";

  if (A > B) {
      [A, B] = [B, A];
  }

  let sum = 0;
  let count = 0;

  for (let i = A; i <= B; i++) {
      sum += i;
      count++;
      output.innerHTML += i + "<br>";
  }

  output.innerHTML += "Сума чисел: " + sum + "<br>";
  output.innerHTML += "Кількість чисел: " + count + "<br>";
}

function task34() {
  const userNumber = parseInt(prompt("Введіть число:"));
  const output = document.getElementById("output");
  output.innerHTML = "";

  for (let i = userNumber; i >= 0; i--) {
      output.innerHTML += i + "<br>";
  }
}

function task35() {
  const base = parseInt(prompt("Введіть число:"));
  const exponent = parseInt(prompt("Введіть ступінь:"));
  const output = document.getElementById("output");

  const result = Math.pow(base, exponent);
  output.innerHTML = `${base} ^ ${exponent} = ${result}`;
}

function task36() {
  let previousNumber = null;
  let currentNumber;
  let maxNumber = null;
  const output = document.getElementById("output");
  output.innerHTML = "";

  while (true) {
      currentNumber = parseFloat(prompt("Введіть число:"));

      if (isNaN(currentNumber)) {
          alert("Невірне число. Введіть число ще раз.");
      } else {
          if (currentNumber === previousNumber) {
              break;
          }

          if (maxNumber === null || currentNumber > maxNumber) {
              maxNumber = currentNumber;
          }

          previousNumber = currentNumber;
      }
  }

  output.innerHTML = "Найбільше введене число: " + maxNumber;
}

function task37() {
  const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
  const output = document.getElementById("output");
  output.innerHTML = "";

  let index = 0;
  let nextDay;

  do {
      nextDay = daysOfWeek[index];
      const confirmation = confirm(`День тижня: ${nextDay}. Хочете побачити наступний день?`);
      output.innerHTML += `День тижня: ${nextDay}<br>`;
      index = (index + 1) % daysOfWeek.length;
  } while (nextDay && confirmation);
}

function task38() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  for (let i = 2; i <= 9; i++) {
      for (let j = 1; j <= 10; j++) {
          output.innerHTML += `${i} * ${j} = ${i * j}<br>`;
      }
  }
}