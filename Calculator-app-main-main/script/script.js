//elements
const outPutScreenEl = document.getElementById("display");

const errorMsg = document.querySelector(".error");

// functions
// numbers
function display(num) {
  outPutScreenEl.value += num;
  errorMsg.style.display = "none";
}

// equal btn
function calculate() {
  if (outPutScreenEl.value === "") {
    errorMsg.style.display = "block";
  } else {
    try {
      outPutScreenEl.value = eval(outPutScreenEl.value);
    } catch (error) {
      errorMsg.style.display = "block";
    }
  }
}

// to clear the display
function reset() {
  outPutScreenEl.value = "";
  errorMsg.style.display = "none";
}

// to del the number one by one
function del() {
  outPutScreenEl.value = outPutScreenEl.value.slice(0, -1);
  errorMsg.style.display = "none";
}



  // selecting the elements
  const bodyEl = document.getElementById("body");
  const headingEl = document.getElementById("h1");
  const paraEl = document.getElementById("theme");
  const displayEl = document.getElementById("display");
  const btnContainerEl = document.getElementById("btn-container");
  const allBtns = document.querySelectorAll(".violet-btn");
  const btnDte = document.getElementById("delete");
  const btnReset = document.getElementById("reset");
  const btnEqual = document.getElementById("equal");

  

  allBtns.forEach((val) => {
    val.classList.toggle("blue-btn");
  });
;
