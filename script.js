const buttonSortear = document.querySelector(".button-sortear")

function generateNumber() {
  const inputMax = Math.ceil(document.querySelector(".input-min").value)
  const inputMin = Math.floor(document.querySelector(".input-max").value)
  const drawNumber = document.querySelector(".drawnumber")
  const msg = document.querySelector(".mensage")

  if (inputMax < inputMin) {
    const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;
    drawNumber.innerHTML = result
    msg.innerHTML = "O número sorteado é"
  } else {
    msg.innerHTML = "O primeiro número deve ser maior que o segundo número"
    drawNumber.innerHTML="?"
  }
}

buttonSortear.addEventListener("click", generateNumber)