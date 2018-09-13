'use strict';

angular
	.module('app')
	.factory('customersResource', [function customersResource() {
	    var customers = [
	    {id: 0, name: 'Петя', status: 'active'}, 
	    {id: 1, name: 'Вася', status: 'missing'}, 
	    {id: 2, name: 'Лёлик', status: 'active'}, 
	    {id: 3, name: 'lol', status: 'missing'}];
	    return customers;
	}]);
