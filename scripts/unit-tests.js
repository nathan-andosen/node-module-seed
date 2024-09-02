(async () => {
var Jasmine = require('jasmine');
var Reporter = require('jasmine-terminal-reporter');

const args = require('yargs').argv;
var showOutput = (args.output) ? true : false;

var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

console.log('Starting unit tests...');
jasmine.exitOnCompletion = false;
const result = await jasmine.execute();

if (result.overallStatus === 'passed') {
  console.log('All specs have passed');
} else {
  console.log('At least one spec has failed');
}

// add our reporter
if(showOutput){
  var reporter = new Reporter({
    isVerbose : true
  });
  jasmine.addReporter(reporter);
}

})()
