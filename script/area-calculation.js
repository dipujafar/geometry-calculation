//Triangle Area
function areaTriangleCalculation() {
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const baseValueNumber = parseFloat(baseValueText);

  baseField.value = "";

  if (isNaN(baseValueNumber)) {
    alert("Please Enter a Number Value of Base");
    return;
  }

  //height
  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const heightValueNumber = parseFloat(heightValueText);

  heightField.value = "";

  if (isNaN(heightValueNumber)) {
    alert("Please Enter a Number Value of Height");
    return;
  }

  const area = 0.5 * baseValueNumber * heightValueNumber;
  return area;
}

//Rectangle Area

function areaRectangleCalculation() {
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const widthValueNumber = parseFloat(widthValueText);

  widthField.value = "";

  if (isNaN(widthValueNumber)) {
    alert("Please Enter a Number Value of Width");
    return;
  }

  //height
  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const lengthValueNumber = parseFloat(lengthValueText);

  lengthField.value = "";

  if (isNaN(lengthValueNumber)) {
    alert("Please Enter a Number Value of Length");
    return;
  }

  const area = widthValueNumber * lengthValueNumber;
  return area;
}

function inputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValue = inputField.value;
  const value = parseFloat(inputValue);

  inputField.value = "";
  if (isNaN(value)) {
    alert("Please Enter Number Value");
    return;
  }
  return value;
}

function setElementInnerText(elemetID, area) {
  const element = document.getElementById(elemetID);
  element.innerText = area;
}
