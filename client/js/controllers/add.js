(function() {

    var qcmapp = angular.module('qcmApp');
    qcmapp.controller("AddQcmController", ['$scope', 'Qcm', '$location', function($scope, Qcm, $location) {
        $scope.newQ = null;
        $scope.qcm = new Qcm({
            questions: [],
            title: "Titre du QCM"
        });

        $scope.setResponse = function(newQ, response) {
            newQ.response = response;
        };

        $scope.parseResponse = function(q) {
            switch (q.type) {
                case 'unique':
                    return parseInt(q.response);
                    break;
                case 'tf':
                    if (typeof q.response === 'string') {
                        return q.response === 'true';
                    }
                    return q.response;
                    break;
            }
        };

        $scope.addQuestion = function(q) {
            $scope.qcm.questions.push(q);
            $scope.newQ = null;
        };

        $scope.save = function (q) {
            q.$save(function () {
                $location.path('/');
            });
        }
    }]);
})();