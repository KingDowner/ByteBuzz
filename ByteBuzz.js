// ByteBuzz Algorithm
function generateByteBuzz(number) {
  let sequence = "";

  for (let count = 1; count <= number; count++) {
    let output;

    if (count % 3 === 0 && count % 5 === 0) {
      output = "ByteRush";
    } else if (count % 3 === 0) {
      output = "Byte";
    } else if (count % 5 === 0) {
      output = "Rush";
    } else {
      output = count;
    }

    sequence += output + "\n";
  }

  return sequence;
}

// Button Event Listener
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  const results = document.getElementById("results");
  const numberInput = document.getElementById("numberInput");

  const myNumber = Number(numberInput.value);

  if (myNumber >= 1 && myNumber <= 30 && Number.isInteger(myNumber)) {
    const sequence = generateByteBuzz(myNumber);
    results.textContent = sequence;
  } else {
    results.textContent =
      "Invalid Number. Please select a number between 1 and 30.";
  }
});
