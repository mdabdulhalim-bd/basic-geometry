
document.getElementById('pentagon-btn')
.addEventListener("click", function(){
   const pentgonPValue = document.getElementById('p-id');
   const pentagonPValueText = pentgonPValue.value;
   const p = parseFloat(pentagonPValueText);


   const pentgonBValue = document.getElementById("b-id");
   const pentagonBValueText = pentgonBValue.value;
   const b = parseFloat(pentagonBValueText);


   console.log(b);

   // area calculation
   const pentagonArea = 0.5 * p * b;

 document.getElementById("pentagon-result").textContent = pentagonArea.toFixed(2);

   
})