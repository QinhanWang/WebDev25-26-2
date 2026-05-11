//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.
function card(datas){
    let build = "";
    build = `<div class="fitted card">
              <h3>Summons#: ${datas.summons_number}</h3>
              <hr>
              <p>Plate: ${datas.plate}</p>
              <br>
              <p>Licence type: ${datas.license_type}</p>
              <br>
              <p>${datas.violation}</p>
              <hr>
              <p>Issue on: ${datas.issue_date}</p>
              <hr>
              <p>${datas.issuing_agency}</p>
              </div>.`;

  return build;
}
