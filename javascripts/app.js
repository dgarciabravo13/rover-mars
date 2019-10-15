// Rover Object Goes Here
// ======================
rover1 = {
  direction: "E",
  x:9,
  y:0,
  auto: "ff",
  travelLog:[],
  name: "R2D2",
};

rover2 = {
  direction: "N",
  x:9,
  y:9,
  auto: "ff",
  travelLog:[],
  name:"C3PO",
};

var mars = [
  [null,null,null,"O",null,null,null,null,null,null],
  [null,null,null,"O",null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,"O",null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,"O"],
  [null,null,null,null,null,"O",null,null,null,null],
  [null,null,null,null,null,"R2D2",null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,"O",null,null,null,"O",null,null,null],
];

//var position = mars[rover.x][rover.y];

// ======================
function turnLeft(rover){
  //console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;          
  };
  console.log(rover.direction);
};

function turnRight(rover){
  //console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  };
  console.log(rover.direction);
};

function moveForward(rover){
  
  switch(rover.direction){
    case "N":   
      if(rover.x--> 0) {
        rover["travelLog"].push(rover.x,rover.y);
        console.log("Avanza");
      };
      break;
    case "S":
          if(rover.x++ < 9) {
            rover["travelLog"].push(rover.x,rover.y);
            console.log("Avanza");
          };
    break;
    case "W":  
          if(rover.y-- > 0) {
            rover["travelLog"].push(rover.x,rover.y);
            console.log("Avanza");
          };
    break;
    case "E":
          if(rover.y++ < 9) {
            rover["travelLog"].push(rover.x,rover.y);
            console.log("Avanza");
          };
    break;      
  };
  //console.log(rover.x,rover.y,rover.direction);
  console.log(rover.travelLog);
};

function moveBackward(rover){
  var position = mars[rover.x][rover.y];
  switch(rover.direction){
    case "N":
        if(rover.x > 9) {
          rover["travelLog"].push(rover.x,rover.y);
          position !== null ? (console.log("Obstacule"),rover.x--) : rover.x++; 
        };     
    break;
    case "S":
          if(rover.x < 0) {
            rover["travelLog"].push(rover.x,rover.y);
            position !== null ? (console.log("Obstacule"),rover.x++) : rover.x--;
          };
    break;
    case "W":  
          if(rover.y > 9) {
            rover["travelLog"].push(rover.x,rover.y);
            position !== null ? (console.log("Obstacule"),rover.y--) : rover.y++;
          };
    break;
    case "E":
          if(rover.y < 0) {
            rover["travelLog"].push(rover.x,rover.y);
            position !== null ? (console.log("Obstacule"),rover.y++) : rover.y++;
          };
    break;      
  };
  console.log(rover.x,rover.y,rover.direction);
  console.log(rover.travelLog);
};


function automaticPilot(rover){

  for(let i = 0; i < rover["auto"].length; i++) {
    let letter = rover.auto[i];
      if (letter === "r") {
        turnRight(rover);
      } else if(letter === "f"){
        moveForward(rover);
      } else if(letter === "l"){
        turnLeft(rover);
      } else if(letter === "b"){
        moveBackward(rover);
      }else continue;
  
  };
};

function movePerTurns(){
  
  for (var i = 0; i < 10; i++){
    if(i % 2 === 0){
      mars[rover1.x][rover1.y] = null; 
      console.log("Turno de:" + rover1.name);
      automaticPilot(rover1);
      mars[rover1.x][rover1.y] = rover1.name;
    } else {
      mars[rover2.x][rover2.y] = null;
      console.log("Turno de:" + rover2.name);
      automaticPilot(rover2);
      mars[rover2.x][rover2.y] = rover2.name;
   };
  };
};