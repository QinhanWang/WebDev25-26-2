function init(){
  //For all challenges use the function display( ) in order to output the results to the console and the webpage. 
  // The example below calls the function randint() and displays the value returned by it in the console and page.
  let secret = randint(1,10);
  display(secret);
  
  //Challenge 1: Use the function area( ) created in helper.js to display the area of any rectangle of your choice of dimensions.
  let lenght = 2;
  let width = 2 ; 
  let rectangle = area(lenght, width);
  display(`<h4>Challenge 1:</h4> 
    The area of rectangle is : ${rectangle} ; The lenght is : ${length} ; The width is : ${width}`);

  //Challenge 2: Use the function celsius( ) created in helper.js to show the Celsius equivalent of any Fahrenheit temperature. 
  let temp = celsius(50);
  display(`<h4>Challenge 2:</h4>
    The Fahreheit temperature is : ${temp}`);

  //Challenge 4: Set height and weight to appropriate numbers. Pass the variables as arguments to the bmi() function defined in Challenge 3.
  // Store the result in a variable called b. Display the value of b.
  let height = 72;
  let weight = 200;
  let b = bmi(height, weight);
  display(`<h4>Challenge 4:</h4>
         BMI: ${b}`);

  //Challenge 6:  Pass the value b from challenge 4 to the bmiCategory() function and store in a variable bc.  Display the BMI category returned by bmiCategory().
  let bc = bmiCategory(b);
  display(`<h4>Challenge 6:</h4>
    Based on the BMI yor are: ${bc}`);

  
  //Challenge 8: Call lottery() with some number and display the results.
    let result = lottery(6);
  display(`<h4>Challenge 8:</h4> 
              Lotto numbers: ${result}`);


  //Challengen 10: Create an array survey which contains several "Y" and "N" items. Pass this survey array to the function results( ) and display the value returned.
  let survey_results = ["Y","N","N","N","N","Y","N","Y","N","Y","Y","N"];
  display(`<h4>Challenge 10:</h4> 
              # of Y responses: ${results(survey_results)}`);
}

