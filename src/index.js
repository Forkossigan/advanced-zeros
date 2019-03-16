module.exports = function getZerosCount(number, base) {
  var base=10;
  var number=10;
  simplenumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,

    47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
    
    103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
    
    211,	223,	227,	229, 233,	239,	241,	251]
    var numberRow = [];
    yetBase = base;
    sumzeroArray=[];

    for(j=0; j<1000; j++ ){
    
      if(yetBase%simpleNumbers[j]){continue};
      yetBase = yetBase/simpleNumbers[j];
      numberRow.push(simpleNumbers[j]);
      if(yetBase == 1 ){break};
      j= -1;

    }
    var length = numberRow.length;
    for(nnr = 0; nnr < length; nnr++){
      var p = number;
      var z = numberRow[nnr];
      var y = 0;
      var deg = 1;
      var sumzero = 0;
      if(numberRow[nnr] == 1){continue};
      while(p>z){
        y=p/z;
        sumzero+=y;
        z=z*z;
      }
      for(k=1;k<length;k++){
        if (numberRow[nnr] == numberRow[k]){
          deg = deg + 1;
          numberRow[k] = 1;
        }
      }
      sumzero = sumzero/deg;
      sumzeroArray.push(sumzero);

    }
return Math.min.apply(null, sumzeroArray);
}
  