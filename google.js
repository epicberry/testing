var Horseman = require('node-horseman');
//var testData = require('testCasesData');

//var testDataInstance = new testData();
//console.log(testDataInstance.testCases);

var testCases = [
  {
    "testCaseId" : "1",
    "testCategory": "cat1",
    "includeInExecution" : "true",
    "description" : "",
    "basic" : {
      "browser" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
      "url" : "http://www.google.com",
    },
    "steps" : {
      "testQuery" : "github",
    }
  },
  {
    "testCaseId" : "2",
    "testCategory": "cat1",
    "includeInExecution" : "true",
    "description" : "",
    "basic" : {
      "browser" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
      "url" : "http://www.google.com",
    },
    "steps" : {
      "testQuery" : "Param Testing",
    }
  },
  {
    "testCaseId" : "3",
    "testCategory": "cat2",
    "includeInExecution" : "false",
    "description" : "",
    "basic" : {
      "browser" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
      "url" : "http://www.google.com",
    },
    "steps" : {
      "testQuery" : "one more time",
    }
  }
];

var count = 0;
testCases.forEach(function(item) {
    //var horseman = new Horseman();

    console.log(testCases[count].testCaseId);
    //horseman
    new Horseman()
        .userAgent(testCases[count].basic.browser)
        .open(testCases[count].basic.url)
        .type('input[name="q"]', testCases[count].steps.testQuery)
        .click('[name="btnK"]')
        .keyboardEvent('keypress', 16777221)
        .waitForSelector('div.g')
        .count('div.g')
        .log() // prints out the number of results
        .screenshot(testCases[count].testCaseId + '.png')
        .close();

    /*.on('error', function (msg, trace) {
                console.log(msg, trace);
            }).on('timeout', function (timeout, msg) {
                console.log('timeout', msg);
            }).on('resourceTimeout', function (msg) {
                console.log('resourceTimeout', msg);
            }).on('resourceError', function (msg) {
                console.log('resourceError', msg);
            }).on('loadFinished', function (msg) {
                console.log('loadFinished', msg);
            }).on('loadStarted', function (msg) {
                console.log('loadStarted', msg);
            });*/

    count++;
});

/*
var horseman = new Horseman();

horseman
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open('http://www.google.com')
  .type('input[name="q"]', 'test query')
  .click('[name="btnK"]')
  .keyboardEvent('keypress', 16777221)
  .waitForSelector('div.g')
  .count('div.g')
  .log() // prints out the number of results
  .screenshot('big.png')
  .close();
*/
