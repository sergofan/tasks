'use strict';

angular
	.module('app')
	.controller('MainCtrl', ["$rootScope", "$state", "$stateParams",
	function MainCtrl ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		/*$rootScope.$on("$stateChangeSuccess", function() {
		  $timeout(function() {
			  if ($stateParams.id) {
				  alert("State Id: "+$stateParams.id);
			  };
		  }, 50);
		});*/
	}]);
