/**
 * Created by simin on 18/2/8.
 */
var CountStream = require('./CountStream');
var countStream = new CountStream('book');


/*var https = require('https');
https.get('https://www.manning.com',function (res) {
    res.pipe(countStream);
});

countStream.on('total',function (count) {
    console.log('total:',count);
})*/

var fs = require('fs');
var readStream = fs.createReadStream('./test.txt').pipe(countStream);
readStream.on('open',function () {
    console.log('open');
});

readStream.on('data',function () {
    console.log('data');
});

readStream.on('end',function () {
    console.log('end');
});

readStream.on('close',function () {
    console.log('close');
});

readStream.on('total',function (count) {
    console.log('total:',count);
});


