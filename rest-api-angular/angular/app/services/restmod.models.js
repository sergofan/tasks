// 'use strict';

angular
	.module('app')
	.factory('Customer', ["restmod", function Customer(restmod){
		return restmod.model('/customers');
		// return restmod.model('/customers').mix({
			// statuses: {
			// 	hasOne: 'Status'
			// 	// map: 'IdStatuses'
			// }
		// });
	}])

	.factory('Status', ["restmod", function Status(restmod){
		return restmod.model('/statuses');
		// return restmod.model('/statuses').mix({
			// customers: {
			// 	belongsTo: 'Customer'
			// }
		// });
	}]);
