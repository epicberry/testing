var app = angular.module('paramsingh', []);

app.controller('TestCaseController', function ($scope) {

	$scope.search = "";
	$scope.order = "testCaseId";
	$scope.selectedIndex = null;
	$scope.selectedTestCase = null;

	$scope.selectTestCase = function (testCase, index) {
		$scope.selectedIndex = index;
		$scope.selectedTestCase = testCase;
	};

	$scope.sensitiveSearch = function(testCase) {
		if ($scope.search) {
			return testCase.testCaseId.indexOf($scope.search) == 0 ||
				     testCase.testCategory.indexOf($scope.search) == 0;
		}
		return true;
	};

	$scope.runTestCases = function(testCases){
		console.log(testCases);
		// var testCasesToBeRun = $scope.testCases.filter(function(t){return t.includeInExecution == 'true';});
		var testCasesToBeRun = testCases.filter(function(t){return t.includeInExecution == 'true';});
		//console.log(testCasesToBeRun);
		console.log(JSON.stringify(testCasesToBeRun));
	};

	$scope.testCases = [
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
				"testQuery" : "github",
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
				"testQuery" : "github",
      }
    },
	]
});
