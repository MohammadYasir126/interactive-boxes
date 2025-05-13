let boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    for (let j = 0; j < boxes.length; j++) {
      boxes[j].classList.remove("active");
      boxes[j].querySelector('input[type="radio"]').checked = false;
    }
    this.classList.add("active");
    this.querySelector('input[type="radio"]').checked = true;
  });
}
