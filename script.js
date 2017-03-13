var button = document.getElementById('button'),
    xArr = [],
    yArr = [];

document.getElementById('button').onclick = function() {
        xArr = document.getElementById('xArray').value.split(',');
        yArr = document.getElementById('yArray').value.split(',');
		console.log(discretization(xArr, yArr));
};

function discretization(x, y) {
//    if((x.length && y.length) == 0) {
//         x = [1, 2, 3];
//         y = [1, 3, 5];
//    }

    var y = y.reverse();
        results = [];
        sum = 0;
        sLength = x.length + y.length - 1;

    for (var m = 0; m < sLength; ++m) {
        for (var k = 0; k < sLength; ++k) {
            if (x[k] != undefined && y[m - k] != undefined) {
                sum += x[k] * y[m - k];
            }
        }
        results.push(sum);
        sum = 0;
    }
    document.getElementById('result').value = results;
}

console.log()
