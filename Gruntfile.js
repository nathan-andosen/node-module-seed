module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  
  var init = {};
  
  // execute bash commands
  init.exec = {
    tsc : {
      cmd : 'bash ./node_modules/.bin/tsc'
    },
    compileBrowserTests : {
      cmd : 'bash ./scripts/browser-compile-unit-tests.sh'
    },
    build : {
      cmd : 'bash ./scripts/build.sh'
    },
    buildPatch : {
      cmd : 'npm --no-git-tag-version version patch && bash ./scripts/build.sh'
    },
    buildMinor : {
      cmd : 'npm --no-git-tag-version version minor && bash ./scripts/build.sh'
    },
    buildMajor : {
      cmd : 'npm --no-git-tag-version version major && bash ./scripts/build.sh'
    },
    tests : {
      cmd : 'node ./scripts/unit-tests.js'
    },
    testsWithOutput : {
      cmd : 'node ./scripts/unit-tests.js --output'
    },
    testCoverage: {
      cmd: 'bash ./scripts/test-coverage.sh'
    }
  };
  
  
  // watch tasks
  init.watch = {
    dev : {
      files : [
        "src/**/*.ts",
        "spec/**/*.ts"
      ],
      tasks : ["builddev"]
    }
  };
  
  
  grunt.initConfig(init);
  
  // our grunt commands
  grunt.registerTask("builddev", ["exec:tsc", "exec:testCoverage"]);
  grunt.registerTask("dev", ["builddev", "watch:dev"]);
  grunt.registerTask("tests", ["exec:tsc", "exec:testsWithOutput", "exec:compileBrowserTests"]);
  grunt.registerTask("test", ["tests"]);
  grunt.registerTask("coverage", ["exec:tsc", "exec:testCoverage"]);
  grunt.registerTask("build", ["exec:build"]);
  grunt.registerTask("build-patch", ["exec:buildPatch"]);
  grunt.registerTask("build-minor", ["exec:buildMinor"]);
  grunt.registerTask("build-major", ["exec:buildMajor"]);
};