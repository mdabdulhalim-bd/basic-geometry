

function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
  


    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
   
    // Law
    const area = 0.5 * base * height;
    
    const showResult = document.querySelector("#triangle-area");
    showResult.textContent = area.toFixed(2);

    // clear output area
    triangleBaseInput.value = '';
    triangleHeightInput.value = '';
}
