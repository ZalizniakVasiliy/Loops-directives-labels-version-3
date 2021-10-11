const userNumber = +prompt(
  "Enter a some number for the definition of a minimal divider of this number"
);
if (userNumber < 1) {
  console.log(`NaN`);
} else if (userNumber === 1) {
  console.log(`${userNumber} is not a simple number, because it divides only on number '1'
                             and has no two natural dividers.`);
}
if (userNumber > 1) {
  let isSimple = true;
  for (let i = 2; i < userNumber; i++) {
    if (userNumber % i === 0) {
      console.log(`Minimal divider of the number ${userNumber} is ${i}`);
      isSimple = false;
      break;
    }
  }
  if (isSimple) {
    console.log(
      `The number ${userNumber} is simple, because minimal divider of this number
     is the same number ${userNumber} and number 1`
    );
  }
}
