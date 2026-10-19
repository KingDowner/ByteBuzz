console.log("Welcome to ByteBuzz!");

console.log(
  "Select a number between 1 and 30 and we will replace the multiples of 3 with 'Byte', multiples of 5 with 'Rush', and multiples of both with 'ByteRush'.",
);

let myNumber = 30;

if (myNumber >= 1 && myNumber <= 30) {
  console.log("You selected: " + myNumber);
  for (let count = 1; count <= myNumber; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      console.log("ByteRush");
    } else if (count % 3 === 0) {
      console.log("Byte");
    } else if (count % 5 === 0) {
      console.log("Rush");
    } else {
      console.log(count);
    }
  }
} else {
  console.log("Invalid Number. Please select a number between 1 and 30.");
}
