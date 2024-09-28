function distanceFromHqInBlocks( pickuplocation){
let hqLocation=42
return Math.abs (pickuplocation - hqLocation)
}
console.log(distanceFromHqInBlocks (50));

function distanceFromHqInFeet(pickuplocation){
   let blocks= distanceFromHqInBlocks( pickuplocation)
   return blocks *264
}
console.log (distanceFromHqInFeet (50));

function distanceTravelledInFeet(start , destination){
   return Math.abs(start -destination)*264;
}
function calculatesFarePrice(start , destination){
  const distance= distanceTravelledInFeet(start,destination);
  if(distance <=400){
   return 0;
  }
  else if (distance <=2000){
   return (distance -400)*0.02;
  }else if (distance <= 2500){
   return 25;
  }
  else{
   return 'cannot travel that far'
  }
}


