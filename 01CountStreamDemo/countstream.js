/**
 * Created by simin on 18/2/8.
 */
var Writable = require('stream').Writable;
var util = require('util');

function CountStream(matchText,options) {
    Writable.call(this,options);
    this.count = 0;
    this.matcher = new RegExp(matchText,'ig');
}

util.inherits(CountStream,Writable);

CountStream.prototype._write = function (chunk,encoding,cb) {
    /*this.count += chunk.length;
    console.log(chunk);*/
    var matches = chunk.toString().match(this.matcher);
    if(matches){
        this.count += matches.length;
    }
    cb();
}

CountStream.prototype.end = function () {
    this.emit('total',this.count);
}

module.exports = CountStream;