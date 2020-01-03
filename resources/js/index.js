/* Scripts */

/*
 * function used to check and find the adjacent empty cell.
 * call the move cell function.
 */
const validateAdjacentCell = e => {
  let targetElem = document.getElementById(e.target.id);
  let targetNum = parseInt(targetElem.id);
  if (
    targetNum - 4 > 0 &&
    document.getElementById(targetNum - 4).innerHTML === ""
  ) {
    let elem = document.getElementById(targetNum - 4);
    moveCell(elem, targetNum);
  } else if (
    targetNum + 4 <= 16 &&
    document.getElementById(targetNum + 4).innerHTML === ""
  ) {
    let elem = document.getElementById(targetNum + 4);
    moveCell(elem, targetNum);
  } else if (
    targetNum % 4 != 0 &&
    document.getElementById(targetNum + 1).innerHTML === ""
  ) {
    let elem = document.getElementById(targetNum + 1);
    moveCell(elem, targetNum);
  } else if (
    targetNum % 4 != 1 &&
    document.getElementById(targetNum - 1).innerHTML === ""
  ) {
    let elem = document.getElementById(targetNum - 1);
    moveCell(elem, targetNum);
  } else if (
    targetNum % 4 != 1 &&
    targetNum % 4 != 0 &&
    document.getElementById(targetNum + 1).innerHTML === ""
  ) {
    let elem = document.getElementById(targetNum - 1);
    moveCell(elem, targetNum);
  } else if (
    targetNum % 4 != 0 &&
    targetNum % 4 != 1 &&
    document.getElementById(targetNum + 1).innerHTML === ""
  ) {
    let elem = document.getElementById(targetNum + 1);
    moveCell(elem, targetNum);
  }
};

/*
 * function which move the pointed element to empty cell.
 * empty the pointed cell.
 */
const moveCell = (elem, targetNum) => {
  elem.innerHTML = document.getElementById(targetNum).innerHTML;
  elem.classList.add("non-empty-cell");
  document.getElementById(targetNum).innerHTML = "";
  document.getElementById(targetNum).classList.remove("non-empty-cell");
};
