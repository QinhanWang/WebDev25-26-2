/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
         let len = parseFloat(document.getElementById("L").value);
         let wid = parseFloat(document.getElementById("w").value);
         let op = document.getElementById("output");
         let A = len * wid;
         op.innerHTML= "Area is: " + A; 
}

function recPerimeter(){
         let len = parseFloat(document.getElementById("L").value);
         let wid = parseFloat(document.getElementById("w").value);
         let op = document.getElementById("output");
         let P = 2*len + 2*wid;
         op.innerHTML= "Perimeter is: " + P; 

}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
         let Rad = parseFloat(document.getElementById("R").value);
         let op = document.getElementById("output");
         let A = pi*(Rad**2);
         op.innerHTML= "Area is: " + A; 
}

function cirPerimeter(){
         let Rad = parseFloat(document.getElementById("R").value);
         let op = document.getElementById("output");
         let C = 2*Rad*pi;
         op.innerHTML= "Circumpference is: " + C; 
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){
         let Bas = parseFloat(document.getElementById("B").value);
         let Hei = parseFloat(document.getElementById("H").value);
         let op = document.getElementById("output");
         let A = (L*H)/2;
         op.innerHTML= " Area is" + A;

}

function triPerimeter(){
      let a = parseFloat(document.getElementById("a").value);
      let b = parseFloat(document.getElementById("b").value);
      let c = parseFloat(document.getElementById("c").value);
      let op = document.getElementById("output");
      let P = a + b + c;
      op.innerHTML= "Perimeter is: " + P;  

}