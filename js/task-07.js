const fontEl = document.getElementById("text");
const inputlEl = document.querySelector("#font-size-control");

inputlEl.addEventListener("input", function(event) {
    fontEl.style.fontSize = `${event.currentTarget.value}px`;
  });

  

