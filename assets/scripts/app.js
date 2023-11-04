const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

function clear() {
  currentResult = defaultResult;
  createAndWriteOutput('', currentResult, '');
}

// function equalbtn() {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult = currentResult;
//   createAndWriteOutput('=', initialResult, enteredNumber);
// }

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
clearbtn.addEventListener('click', clear);
//equalbtn.addEventListener('click', equal);
addBtn.addEventListener('NumpadAdd', add);