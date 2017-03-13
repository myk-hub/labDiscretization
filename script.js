var button = document.getElementById('button'),
    xArr = [],
    yArr = [],
    results = [];

document.getElementById('button').onclick = function() {
        xArr = document.getElementById('xArray').value.split(',');
        yArr = document.getElementById('yArray').value.split(',');
        discretization(xArr, yArr);
};

function discretization(x, y) {
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
        document.getElementById('result').value = results
}
