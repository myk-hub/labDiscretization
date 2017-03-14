document.getElementById('button').onclick = function() {
    var xArr = document.getElementById('xArray').value.split(','),
        yArr = document.getElementById('yArray').value.split(',').reverse();
    discretization(xArr, yArr);
};

function discretization(x, y) {
    results = [];
    sum = 0;
    sLength = x.length + y.length - 1;

    for (var m = 0; m < sLength; ++m) {
        for (var k = 0; k < sLength; ++k) {
            if (x[k] !== undefined && y[m - k] !== undefined) {
                sum += x[k] * y[m - k];
            }
        }
        results.push(sum);
        sum = 0;
    }
    document.getElementById('result').value = results;
}
