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

function addToAreaEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-4", "space-x-4");
  p.innerHTML = ` ${
    count + 1
  }. ${areaType}   <span class="font-bold"> ${area}cm<sup>2</sup> </span> <button class="btn btn-success btn-sm">Convert</button>`;

  calculationEntry.appendChild(p);
}
