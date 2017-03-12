function getData(x, y) {
    var xArr = document.getElementById('xArray').value;
    var yArr = document.getElementById('yArray').value;
        xArr = xArr.split(',');
        yArr = yArr.split(',');
    document.getElementById('try').innerHTML = xArr;
    //    var xArr = [1, 2, 3],
    //        yArr = [1, 3, 5];
    console.log(typeof(xArr));
    console.log((xArr));
    console.log(typeof(yArr));
}

function discretization(x, y) {
    var y = y.reverse();
    var results = [];
    var sum = 0;
    var sLength = x.length + y.length - 1;

    for (var m = 0; m < sLength; ++m) {
        for (var k = 0; k < sLength; ++k) {
            if (x[k] != undefined && y[m - k] != undefined) {
                sum += x[k] * y[m - k];
            }
        }
        results.push(sum);
        sum = 0;
    }
    return results;
}

window.onload = function() {
    document.getElementById('result').innerHTML = getData(xArr, yArr);
}
