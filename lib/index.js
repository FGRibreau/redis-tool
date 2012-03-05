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
  spawn('redis-cli', args)
    .stdout
    .on('data', function(out){
      fnStdout(out.toString().trim());
    });
};

d.findKeys = function(pattern, fn){
  d.redisCli(['keys', pattern], function(keys){
    fn(keys.split('\n'));
  });
};
