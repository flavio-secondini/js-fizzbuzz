var numeri = [];

for (var i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    numeri.push("FizzBuzz");
  } else if (i % 3 === 0) {
    numeri.push("Fizz");
  } else if (i % 5 === 0) {
    numeri.push("Buzz");
  } else {
    numeri.push(i);
  }
}

for (var i = 0; i < numeri.length; i++) {
  document.getElementById("lista").innerHTML += ("<li>") + numeri[i] + ("</li>")
}
