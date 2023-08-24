function calculateTriangleArea(){
    // get the triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseFieldValueString = baseField.value;
    const base = parseFloat(baseFieldValueString);
    console.log(base)

    // get the triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightFieldValueString = heightField.value;
    const height = parseFloat(heightFieldValueString);
    console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log(area)

    // show triangle area:
    const areaValue = document.getElementById('triangle-area');
    areaValue.innerText = area;
}

function calculateRectangleArea(){
    // get the rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthFieldValueString = widthField.value;
    const width = parseFloat(widthFieldValueString);
    console.log(width)

    // get the rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldValueString = lengthField.value;
    const length = parseFloat(lengthFieldValueString);
    console.log(length);

    // validate input:
    if(isNaN(width) || isNaN(length)){
        alert('please insert width number');
        return;
    }

    // calculate rectangle area
    const area = width * length;
    console.log(area)

    // show rectangle area:
    const areaValue = document.getElementById('rectangle-area');
    areaValue.innerText = area;
}

// reusable function ---> reduce duplicate code
// calculate Parallelogram:
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
    const area = base * height;
    setElementInnerText('parallelogram-area', area)

    // validation
    if(isNaN(base) || isNaN(height)){
        alert('please provide a number');
        return;
    }

    // add to calculation entry:
    addToAreaCalculator('Parallelogram', area)
}

// calculate ellipse:
function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    
    // validation:
    if(isNaN(majorRadius) || isNaN(minorRadius)){
        alert('please provide a number');
        return;
    }
    
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2)
    setElementInnerText('ellipse-area', areaTwoDecimal);

    // add to calculation entry:
    addToAreaCalculator('Ellipse', areaTwoDecimal)
}

function calculateRhombusArea(){
    const firstDiagonal = getInputValue('rhombus-first-diagonal');
    const secondDiagonal = getInputValue('rhombus-second-diagonal');
    const area = 0.5 * firstDiagonal * secondDiagonal;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('rhombus-area', areaTwoDecimal)
}

// reusable get input field in number
function getInputValue(inputFieldId){
    const inputFieldValue = document.getElementById(inputFieldId);
    const inputFieldValueString = inputFieldValue.value;
    const inputField = parseFloat(inputFieldValueString);
    return inputField;
}

// reusable set span, p, div etc text
function setElementInnerText(elementId, areaValue){
    const element = document.getElementById(elementId);
    element.innerText = areaValue;
}

// add to calculation entry:
/**
 * 1. get the element where you want to add the dynamic HTML.
 * 2. create an element you want to add.
 * 3. if needed, add some class.
 * 4. set inner HTML. it could be dynamic template string
 */
function addToAreaCalculator(shape, area){
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    
    const p = document.createElement('p');
    p.classList.add('my-4', 'font-semibold')
    p.innerHTML = `${count + 1}. ${shape} ${area} cm<sup>2</sup> <button class="btn btn-info font-semibold text-white">Convert</button>`

    calculationEntry.appendChild(p);
}


// Data validation:
/**
 * 1. set the proper type of the input field. (number, data, email)
 * 2. check type using typeof
 * 3. NaN means: Not a number. isNaN is checking whether the input is not a number or not
*/