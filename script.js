var xArr = [1, 2, 3],
    yArr = [1, 3, 5];

function discretization(x, y) {
    y = y.reverse();
    var  results = [];
    var  sum = 0;
    var  sLength = x.length + y.length - 1;

  for(var m = 0; m < sLength; ++m){
      for(var k = 0; k < sLength; ++k){
          if(x[k] != undefined && y[m-k] != undefined){
              sum += x[k] * y[m-k];
          }
      }
      results.push(sum);
      sum = 0;
  }
  return results;
}

console.log(discretization(xArr, yArr));

window.onload = function(){
    document.getElementById('result').innerHTML = discretization(xArr, yArr);
}


function getData() {
    var x = document.getElementById('xArray').value;
    var y = document.getElementById('yArray').value;
    x = x.split(',');
    y = y.split(',');
    document.getElementById('try').innerHTML = x;
}


window.onload = function(){
    document.getElementById('buttonResult').addEventListeneer('click', getData);
}
