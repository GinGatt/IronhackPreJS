//position [x,y]
var myRover = {
  position: [0,0], 
  direction: 'N'
};

var myGrid = new Array(10);
for(var i=0; i<10; i++){
  myGrid[i]=new Array(10);
}
//myGrid[9][9]="GSquared";
//console.log(myGrid[9][9]);

function wrap(rover){
  if(Math.abs(rover.position[0]) > 9){
    rover.position[0] = rover.position[0]%10;
  }
  if(Math.abs(rover.position[1]) > 9){
    rover.position[1] = rover.position[1]%10;
  }
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      break;
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[1]--
      break;
    case 'W':
      rover.position[0]--
      break;
  };
  wrap(rover);
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}
function goBack(rover){
  switch(rover.direction){
    case 'N':
      rover.position[1]--
      break;
    case 'E':
      rover.position[0]--
      break;
    case 'S':
      rover.position[1]++
      break;
    case 'W':
      rover.position[0]++
      break;
  };
  wrap(rover);
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}
function turnLeft(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'S'
      break;
  };
  console.log("New Rover Direction: " + rover.direction)
}
function turnRight(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  };
  console.log("New Rover Direction: " + rover.direction)
}

function execute(command_str){
  for (var i=0; i< command_str.length; i++){
    if (command_str[i].toLowerCase() === 'f'){
      goForward(myRover);
    }
    else if (command_str[i].toLowerCase() === 'b'){
      goBack(myRover);
    }
    else if (command_str[i].toLowerCase() === 'r'){
      turnRight(myRover);
    }
    else if (command_str[i].toLowerCase() === 'l'){
      turnLeft(myRover);
    }
    else{
      console.log("Improper command. Use only 'f,b,r,l'");
    }
  }
}

execute('ffffffffffffffffrffffff');
