(function() {
	var qcmApp = angular.module('qcmApp');
	qcmApp.service('Qcm', ['$resource', function($resource) {
		return $resource('/api/qcms/:id', {
			id: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}]);
})();