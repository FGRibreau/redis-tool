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
