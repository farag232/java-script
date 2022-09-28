function StairCase(stairCaseLength) {
  let stairs = "";
  for (let i = 0; i < stairCaseLength; i++) {
    let stair = "#".repeat(i + 1) + "\n";
    stairs += stair;
  }

  console.log(stairs.trim());
}

StairCase(2);
StairCase(3);
StairCase(4);
