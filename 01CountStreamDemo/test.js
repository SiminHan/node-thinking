/**
 * Created by simin on 18/2/8.
 */
var assert = require('assert');
var CountStream = require('./CountStream');
var countStream = new CountStream('example');
var fs = require('fs');
var passed = 0;

countStream.on('total',function (count) {
    console.log(count);
    assert.equal(count,1);
    passed++;
});

fs.createReadStream(__filename).pipe(countStream);

process.on('exit',function () {
    console.log('Assertions passed:',passed);
})