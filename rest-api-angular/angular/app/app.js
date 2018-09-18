'use strict';

angular
	.module('app',[
		"restmod",
		"ngAnimate",
		"ui.router",
		"ct.ui.router.extras",
		"ui.router.stateHelper",
		"mgcrea.ngStrap",
		"ngResource"
	])

	.config(['$urlRouterProvider', 'stateHelperProvider', '$navbarProvider', '$alertProvider', "$asideProvider", "restmodProvider",
		function($urlRouterProvider, stateHelperProvider, $navbarProvider, $alertProvider, $asideProvider, restmodProvider) {

		restmodProvider.rebase({
			$config: {
				style: 'AMSApi',
				urlPrefix: 'http://localhost:3000'
			},
			$extend: {
				Model: {
					encodeUrlName: function(_name) {
						return _name.toLowerCase();
					}
				}
			}
		});

		// var states = [];
		stateHelperProvider
			.state({
				name: 'home',
				url: '/home',
				data: {pageHeader: 'Пример AngularStrap + UI Router'},
				templateUrl: '/app/templates/home.html'
			})
			.state({
				name: 'customers',
				// abstract: true,
				parent: 'home',
				url: '/customers',
				data: {pageHeader: 'Клиенты'},
				templateUrl: '/app/templates/customers.html',
				resolve: {
					// customers: function(CustomersResource){
					customers: function CustomersResource(restmod) {
						return restmod.model('/customers').$search().$asPromise();
						// return CustomersResource;
					}
				},
				controller: 'CustomersCtrl'
			})
			.state({
				name: 'id',
				parent: 'home.customers',
				url: '/:id/view',
				templateUrl: '/app/templates/view.html',
				controller: function($rootScope ,$scope, $stateParams) {
					$scope.currentCustomer = $scope.customers[$stateParams.id-1];
				}
			})
			.state({
				name: 'page',
				parent: 'home',
				url: '/page',
				data: {pageHeader: 'Пустая страница'},
				templateUrl: '/app/templates/page.html'

			});

		// angular.forEach(states, function(state) {
		// 	stateHelperProvider.state(state);
		// });

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
