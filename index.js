var PythonShell = require('python-shell');

var options = {
  mode: 'text',
  pythonPath: '/usr/bin/python3',
  pythonOptions: ['-u'],
  scriptPath: '',
  args: ['value1', 'value2', 'value3']
};

PythonShell.run('my_script.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
  var i = results;
  console.log(results[0]);

});
