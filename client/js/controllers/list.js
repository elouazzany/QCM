(function() {
	var qcmApp = angular.module('qcmApp');
	qcmApp.controller('ListQcmController', ['$scope', 'Qcm', function($scope, Qcm) {
		$scope.removeOne = function(one) {
			if (confirm('Voulez-vous supprimer ce QCM?')) {
				one.$remove({
					id: one._id
				}, function() {
					$scope.refresh();
				});
			}
		};

		($scope.refresh = function() {
			$scope.qcms = Qcm.query();
		})();
	}]);
})();