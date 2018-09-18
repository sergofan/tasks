'use strict';

angular
	.module('app')

	.controller('CustomersCtrl', ["$scope", "$state", "customers",
		function CustomersCtrl ($scope, $state, customers){
			$scope.customers = customers;
			$scope.details = function (customer) {
				$state.go('home.customers.id', {id: customer.id});
			}
	}]);

