module.exports = function getZerosCount(number, base) {
  
  let maxPower = 0, count = 0;
  let zerosCount = Infinity;
  let intermediateBase = base;
  let intermediateNumber;

    for(let i = 2; i <= base; i++){ 
      if(intermediateBase % i == 0){

        maxPower = 0;
        while(intermediateBase % i == 0){ 
          maxPower++; 
          intermediateBase = Math.floor(intermediateBase/i); 
      }

      count = 0;
        intermediateNumber = number;
        while (intermediateNumber/i > 0){
          count+=Math.floor(intermediateNumber/i);
          intermediateNumber = Math.floor(intermediateNumber/i);
      }
      
      if(zerosCount > count/maxPower){ 
        zerosCount=count/maxPower;
      } 
    }
  }
  return Math.floor(zerosCount); 
}
  