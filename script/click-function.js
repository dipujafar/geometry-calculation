document
  .getElementById("triangle-calculation")
  .addEventListener("click", function () {
    const area = areaTriangleCalculation();

    const areaValue = document.getElementById("triangle-area-value");

    areaValue.innerText = area;
  });

// rectangle
document
  .getElementById("rectangle-calculation")
  .addEventListener("click", function () {
    const area = areaRectangleCalculation();

    const areaValue = document.getElementById("rectangle-area-value");

    areaValue.innerText = area;
  });

//Parallelogram

document
  .getElementById("parallelogram-calculation")
  .addEventListener("click", function () {
    const base = inputValue("parallelogram-base");

    const height = inputValue("parallelogram-height");

    const area = base * height;
    setElementInnerText("parallelogram-area-value", area);
  });

document
  .getElementById("ellipse-calculation")
  .addEventListener("click", function () {
    const major = inputValue("ellipse-major");
    const minor = inputValue("ellipse-minor");

    const area = Math.PI * major * major;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText("ellipse-area-value", area);
  });
