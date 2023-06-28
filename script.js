const buttonSortear = document.querySelector(".button-sortear")

function generateNumber() {
  const inputMax = Math.ceil(document.querySelector(".input-min").value)
  const inputMin = Math.floor(document.querySelector(".input-max").value)
  const drawNumber = document.querySelector(".drawnumber")

  const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

  drawNumber.innerHTML = result

}

buttonSortear.addEventListener("click", generateNumber)