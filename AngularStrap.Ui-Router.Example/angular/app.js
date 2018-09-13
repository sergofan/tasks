'use strict';

angular
	.module('app',[
		"ngAnimate",
		"ui.router",
		"ct.ui.router.extras",
		"ui.router.stateHelper",
		"mgcrea.ngStrap"
	])

	.config(['$urlRouterProvider', 'stateHelperProvider', '$navbarProvider', '$alertProvider', "$asideProvider",
		function($urlRouterProvider, stateHelperProvider, $navbarProvider, $alertProvider, $asideProvider) {
		
		var states = [];
		states.push({
			name: 'home',
			url: '/home',
			data: {pageHeader: 'Пример AngularStrap + UI Router'},
			templateUrl: 'home.html'
		});
		states.push({
			name: 'customers', 
			// abstract: true,
			parent: 'home',
			url: '/customers',
			data: {pageHeader: 'Клиенты'},
			templateUrl: 'customers.html',
			resolve: {
				customersResource: 'customersResource',
				customers: function(customersResource){
					return customersResource;
				}
			},
			controller: 'CustomersCtrl'
		});
		states.push({
			name: 'id',
			parent: 'home.customers',
			url: '/:id/view',
			templateUrl: 'view.html',
			controller: function($rootScope ,$scope, $stateParams) {
				$scope.currentCustomer = $scope.customers[$stateParams.id];
			}
		});
		states.push({
			name: 'page',
			parent: 'home',
			url: '/page',
			data: {pageHeader: 'Пустая страница'},
			templateUrl: 'page.html'

		});
		angular.forEach(states, function(state) {
			stateHelperProvider.state(state);
		});

		$urlRouterProvider.otherwise("/home");

		angular.extend($alertProvider.defaults, {
			animation: 'am-fade-and-slide-top',
			container: '#alerts'
		});
	}])

	.directive('hoverClass', function () {
		return {
			restrict: 'A',
			scope: {
				hoverClass: '@'
			},
			link: function (scope, element) {
				element.on('mouseover', function() {
					element.addClass(scope.hoverClass);
				});
				element.on('mouseout', function() {
					element.removeClass(scope.hoverClass);
				});
			}
		};
	});

