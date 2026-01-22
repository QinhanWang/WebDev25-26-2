// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function avg(){
         let g1 = parseFloat(document.getElementById("g1").value);
         let g2 = parseFloat(document.getElementById("g2").value);
         let g3 = parseFloat(document.getElementById("g3").value);
         let op1 = document.getElementById("output1");
         let avg = (g1 + g2 + g3)/3;
         op1.innerHTML = `The average of all 3 grades is ${avg}`;
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function slope(){
         let x1 = parseFloat(document.getElementById("x1").value);
         let y1 = parseFloat(document.getElementById("y1").value);
         let x2 = parseFloat(document.getElementById("x2").value);
         let y2 = parseFloat(document.getElementById("y2").value);
         let op2 = document.getElementById("output2");
         let m = (y2 - y1)/(x2 - x1);
         op2.innerHTML = `Slope between points (${x1},${y1}) and (${x2},${y2}) is ${m}`;
}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function bml(){
         let H = parseFloat(document.getElementById("h").value);
         let W = parseFloat(document.getElementById("w").value);
         let op3 = document.getElementById("output3");
         let bml = 703*W/(H*H);
         op3.innerHTML = ` The BMI is ${bml} `;
}