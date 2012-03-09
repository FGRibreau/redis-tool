//
//  Helpers
//

var spawn = require('child_process').spawn;
var d     = module.exports;

/**
 * Execute a command in Redis
 * @param  {Array} args
 * @param  {Function} fnStdout
 */
d.redisCli = function(args, fnStdout){
  var out = ''
  ,   child = spawn('redis-cli', args);

  child.stdout.on('data', function (stdout) {
    out += stdout.toString().trim();
  });

  child.stderr.on('data', function (data) {
    console.error('Stderr', data);
  });

  child.on('exit', function(){
    fnStdout(out);
  });
};

d.findKeys = function(pattern, fn){
  d.redisCli(['keys', pattern], function(keys){
    fn(keys.split('\n'));
  });
};

// http://ejohn.org/blog/partial-functions-in-javascript/
Function.prototype.curry = function() {
  var fn = this, args = Array.prototype.slice.call(arguments);
  return function curried(){
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
  };
};

Function.prototype.partial = function(){
  var fn = this, args = Array.prototype.slice.call(arguments);
  return function(){
    var arg = 0;
    for ( var i = 0; i < args.length && arg < arguments.length; i++ )
      if ( args[i] === undefined )
        args[i] = arguments[arg++];
    return fn.apply(this, args);
  };
};
