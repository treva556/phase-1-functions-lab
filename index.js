// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  if (blocks < 42){
    return(42-blocks);
}
else{
   return(blocks-42);
}
}

function distanceFromHqInFeet(distanceInFeet){
return Math.abs(distanceFromHqInBlocks(distanceInFeet)*264);
}

function distanceTravelledInFeet(a, b){
return Math.abs((a-b)*264);
}

function calculatesFarePrice(start, destination ){
let distance = distanceTravelledInFeet(start, destination);
if (distance <= 400){
   return 0
}
if (distance >= 400 && distance <= 2000){
   return (distance-400)*0.02;
}
else if(distance >= 2000 && distance <= 2500){
   return 25;
}
else if (distance > 2500) {
   return 'cannot travel that far';
}
}