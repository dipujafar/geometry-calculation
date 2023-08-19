document
  .getElementById("triangle-calculation")
  .addEventListener("click", function () {
    const base = inputValue("triangle-base");

    const height = inputValue("triangle-height");

    const area = 0.5 * base * height;
    setElementInnerText("triangle-area-value", area);
    addToAreaEntry("Triangle", area);
  });

// rectangle
document
  .getElementById("rectangle-calculation")
  .addEventListener("click", function () {
    const width = inputValue("rectangle-width");

    const length = inputValue("rectangle-length");

    const area = width * length;
    setElementInnerText("rectangle-area-value", area);
    addToAreaEntry("Rectangle", area);
  });

//Parallelogram

document
  .getElementById("parallelogram-calculation")
  .addEventListener("click", function () {
    const base = inputValue("parallelogram-base");

    const height = inputValue("parallelogram-height");

    const area = base * height;
    setElementInnerText("parallelogram-area-value", area);
    addToAreaEntry("Parallelogram", area);
  });
//rhombus
document
  .getElementById("rhombus-calculation")
  .addEventListener("click", function () {
    const d1 = inputValue("rhombus-d1");
    const d2 = inputValue("rhombus-d2");

    const area = 0.5 * d1 * d2;

    setElementInnerText("rhombus-area-value", area);

    addToAreaEntry("Rhombush", area);
  });

//pentagon

document
  .getElementById("pentagon-calculation")
  .addEventListener("click", function () {
    const p = inputValue("pentagon-p");
    const a = inputValue("pentagon-a");

    const area = 0.5 * p * a;

    setElementInnerText("pentagon-area-value", area);

    addToAreaEntry("Pentagon", area);
  });

//ellipse
document
  .getElementById("ellipse-calculation")
  .addEventListener("click", function () {
    const major = inputValue("ellipse-major");
    const minor = inputValue("ellipse-minor");

    const area = Math.PI * major * minor;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText("ellipse-area-value", areaTwoDecimal);

    addToAreaEntry("Ellipse", areaTwoDecimal);
  });
