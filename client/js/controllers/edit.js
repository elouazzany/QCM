(function() {

    var qcmapp = angular.module('qcmApp');
    qcmapp.controller("EditQcmController", ['$scope', 'Qcm', '$location', '$routeParams', function($scope, Qcm, $location, $routeParams) {
        $scope.newQ = null;
        $scope.qcm = Qcm.get({
        	id: $routeParams.id
        });

        $scope.setResponse = function (newQ, response) {
            newQ.response = response;
        };

        $scope.parseResponse = function (q) {
        	switch(q.type){
        		case 'unique':
        			return parseInt(q.response);
        			break;
        		case 'tf':
        			if(typeof q.response === 'string'){
        				return q.response === 'true';
        			}
        			return q.response;
        			break;
        	}
        };

        $scope.addQuestion = function (q) {
            $scope.qcm.questions.push(q);
            $scope.newQ = null;
        };

        $scope.save = function (q) {
        	q.$update(function () {
                $location.path('/');
            });
        }
    }]);
})();