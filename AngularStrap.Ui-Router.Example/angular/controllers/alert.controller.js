'use strict';

angular
	.module('app')
	.controller('AlertCtrl', ["$scope", "$alert",
	function MainCtrl ($scope, $alert) {
		var myAlert = $alert({
			title: 'Привет!', 
			content: 'Это пример AngularStrap + UI Router. Используйте меню. :)',
			type: 'info', 
			duration: 5,
			show: true
		});
		$scope.showAlert = function() {
			myAlert.show(); // or myAlert.$promise.then(myAlert.show) if you use an external html template
		};
	}]);
