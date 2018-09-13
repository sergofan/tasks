getDevApp = angular.module("getDevApp",["ngRoute","ngGrid"]);

getDevApp.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
    $routeProvider
    .when("/",{
      controller: "EventListCtrl",
      templateUrl: "views/list.html"
    })
    .when("/event/:name",{
      controller: "EventCtrl",
      templateUrl: "views/event.html"
    })
    .otherwise({
      redirectTo: "/"
    });
    $locationProvider
      .html5Mode(false);
}]);

getDevApp.directive("gdMydirective", function() {
  return{
    link: function ($scope, element) {
      element.html("<div class='label label-warning lead'>пробуем что-то сделать</div>");
    }
  };
});

getDevApp.directive('resizable', function($window) {
  return function($scope) {
    $scope.initializeWindowSize = function() {
      $scope.windowHeight = $window.Height;
      return $scope.windowWidth = $window.Width;
    };
    $scope.initializeWindowSize();
    return angular.element($window).bind('resize', function() {
      $scope.initializeWindowSize();
      return $scope.$apply();
    });
  };
});

getDevApp.service("peopleCalculator",function () {
  return {
      calcPeople: function (val) {
      if (val<10) {
        return "Мало";
      }
      if (val<20) {
        return "Нормально";
      }
      return "Много!"
    }
  };
});

getDevApp.controller("EventCtrl", ["$scope", "$routeParams", function ($scope, $routeParams) {
  $scope.event = {
    url: $routeParams.name,
  }
}]);

getDevApp.controller("EventListCtrl", ["$scope", "$routeParams", function ($scope, $routeParams) {
  $scope.userGroup.events = [
    {url: "event1", name: "Первое событие", descr: "Это первое большое событие"},
    {url: "event2",name: "Второе событие", descr: "Это второе большое событие"}
  ]
}]);

getDevApp.controller("MainCtrl", ["$scope", "peopleCalculator", function ($scope, peopleCalculator) {
  $scope.userGroup = {
    name: "Серж"
  };

  $scope.$watch("peoples", function(val){
    $scope.peopleDescription = peopleCalculator.calcPeople(val);
  });

  $scope.getPercentage = function () {
      return (($scope.total * 100) / $scope.threshold).toFixed(2);
  }

  $scope.percentageStyle = {
    width : $scope.getPercentage() + '%'     
  };

  //$scope.notify = function (description) {
  //  alert(description)
  //};

}]);

getDevApp.controller("sheet", ["$scope", "$parse", function($scope, $parse) {
  $scope.columns = ['A', 'B', 'C', 'D'];
  $scope.rows = [1, 2, 3, 4];
  $scope.cells = {};

  $scope.process = function (exp) {
    return exp.replace(/[A-Z]\d+/g, function(ref) {
      return 'compute("' + ref + '")';
    })
  };

  $scope.compute = function (cell) {
    //return $parse($scope.cells[cell])($scope);
    return $parse($scope.process($scope.cells[cell]))($scope);
  };
}]);

getDevApp.controller ("gridCtrl", ["$scope", function ($scope) {
    $scope.gridData = [{name: "Moroni", age: 50},
                      {name: "Teancum", age: 43},
                      {name: "Jacob", age: 27},
                      {name: "Nephi", age: 29},
                      {name: "Enos", age: 34}];
    $scope.gridOptions = {
      data: 'gridData',
        jqueryUITheme: true,
	enableCellSelection: true,
	enableRowSelection: false,
	enableCellEditOnFocus: true,
	enableColumnResize: true,
	enableRowResize: true,
	//plugins: [new ngGridCsvExportPlugin()],
	showFooter: true,
        showFilter: true,
        showGroupPanel: true,
	columnDefs: [{field: 'name', displayName: 'A', enableCellEdit: true}, 
		     {field:'age', displayName:'B', enableCellEdit: true,
                     //editableCellTemplate: '<input type="number" ng-class="colt + col.index" ng-input="COL_FIELD" ng-model="COL_FIELD" />' }
                     editableCellTemplate: '<input type="number" ng-input="COL_FIELD" ng-model="COL_FIELD" />' }
                    ]
    };
}]);

