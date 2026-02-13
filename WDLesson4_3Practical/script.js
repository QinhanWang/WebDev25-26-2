/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/
function BMI(){
       let h = parseFloat(document.getElementById("h").value);
       let w = parseFloat(document.getElementById("w").value);
       let bmi = 703 * w / (h**2);
       let output = document.getElementById("output");
       let status ="";
       let filename ="";

       if (bmi < 18.5){
              status = "Underweight";
              filename = "underweight.png";
       }else if (bmi >= 18.5 && bmi <= 24.9){
              status = "Healthy Weight";
              filename = "healthyweight.png";
       }else if (bmi >= 25 && bmi <= 29.9){
              status = "Overweight";
              filename = "overweight.png";
       }else if (bmi >= 30.0){
              status = "Obesity";
              filename =  "obeseweight.png";
       }
       output.innerHTML = `<img src = "${filename}"><br>You BMI is ${bmi} and this status is ${status} `;
}
