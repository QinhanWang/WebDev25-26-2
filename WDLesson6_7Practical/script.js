let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    build += `<div class="fitted card">
                 <h3>${crash.on_street_name}</h3>
                 <hr>
                 <h4>Time: ${crash.crash_date}</h4>
                 <h4>ID: ${crash.collision_id}</h4>
                 <h4>Persons injured: ${crash.number_of_persons_injured}</h4>
                 <h4>Persons killed: ${crash.number_of_persons_killed}</h4>
                 <hr>
                 <h3>[Vechicle]</h3>
                 <h4>Factor: ${crash.contributing_factor_vehicle_1}</h4>
                 <h4>Type: ${crash.vehicle_type_code1}</h4>
              </div>` ;   
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function searchStreet(){
  let output = document.getElementById("output");
  let street = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.on_street_name == street){
    build += `<div class="fitted card">
                 <h3>${crash.on_street_name}</h3>
                 <hr>
                 <h5>Time: ${crash.crash_date}</h5>
                 <h4>ID: ${crash.collision_id}</h4>
                 <h4>Persons injured: ${crash.number_of_persons_injured}</h4>
                 <h4>Persons killed: ${crash.number_of_persons_killed}</h4>
                 <hr>
                 <h3>[Vechicle]</h3>
                 <h4>Factor: ${crash.contributing_factor_vehicle_1}</h4>
                 <h4>Type: ${crash.vehicle_type_code1}</h4>
              </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function searchById(){
  let output = document.getElementById("output");
  let id = document.getElementById("zip").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.collision_id == id){
    build += `<div class="fitted card">
                 <h3>${crash.on_street_name}</h3>
                 <hr>
                 <h5>Time: ${crash.crash_date}</h5>
                 <h4>ID: ${crash.collision_id}</h4>
                 <h4>Persons injured: ${crash.number_of_persons_injured}</h4>
                 <h4>Persons killed: ${crash.number_of_persons_killed}</h4>
                 <hr>
                 <h3>[Vechicle]</h3>
                 <h4>Factor: ${crash.contributing_factor_vehicle_1}</h4>
                 <h4>Type: ${crash.vehicle_type_code1}</h4>
              </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.

function searchByFactor(){
  let output = document.getElementById("output");
  let factor = document.getElementById("factor").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.contributing_factor_vehicle_1 == factor){
    build += `<div class="fitted card">
                 <h3>${crash.on_street_name}</h3>
                 <hr>
                 <h5>Time: ${crash.crash_date}</h5>
                 <h4>ID${crash.collision_id}</h4>
                 <h4>Persons injured: ${crash.number_of_persons_injured}</h4>
                 <h4>Persons killed: ${crash.number_of_persons_killed}</h4>
                 <hr>
                 <h3>[Vechicle]</h3>
                 <h4>Factor: ${crash.contributing_factor_vehicle_1}</h4>
                 <h4>Type: ${crash.vehicle_type_code1}</h4>
              </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


function searchByType(){
  let output = document.getElementById("output");
  let type = document.getElementById("type").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.vehicle_type_code1 == type){
    build += `<div class="fitted card">
                 <h3>${crash.on_street_name}</h3>
                 <hr>
                 <h5>Time: ${crash.crash_date}</h5>
                 <h4>ID: ${crash.collision_id}</h4>
                 <h4>Persons injured: ${crash.number_of_persons_injured}</h4>
                 <h4>Persons killed: ${crash.number_of_persons_killed}</h4>
                 <hr>
                 <h3>[Vechicle]</h3>
                 <h4>Factor: ${crash.contributing_factor_vehicle_1}</h4>
                 <h4>Type: ${crash.vehicle_type_code1}</h4>
              </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}