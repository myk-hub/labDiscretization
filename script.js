var xArr = [1, 2, 3];
var yArr = [1, 3, 5];
// x = 1,2,3; y = 1,3,5
// cool function you are looking for
function discretization(x, y) {
  var y = y.reverse(); // реверс бо на тих картинках шо ти кидала, там Y йде в спадаючій від 3 до 1
      results = []; // тут збираєм результати
      sum = 0; // змінна, де зберігаємо суму кожної ітерації
      sLength = x.length + y.length - 1 // це розмір вихідної послідовності,
                                      // сума довжин масивів -1, надіюсь це понятно
  for(var m = 0; m < sLength; ++m){
      for(var k = 0; k < sLength; ++k){
          if(x[k] != undefined && y[m-k] != undefined){  // тут ми типу пропускаємо сумування, якщо одна з клітинок пуста
              sum += x[k] * y[m-k];
          }
      }
      results.push(sum);
      sum = 0;
  }
  return results;
}

window.onload = function(){
    document.getElementById('result').innerHTML = discretization(xArr, yArr);
}
