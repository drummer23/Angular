var app = angular.module('myApp', []);

app.controller('Controller', ['$scope', function($scope) {
    $scope.naomi = {name: 'Naomi', address: '1600 Amphitheatre'};
    $scope.igor = { name: 'Igor', address: '123 Somewhere'};
}]);

app.directive('myCustomer', function() {
        return {
            restrict: 'E',
            scope: {
                customerInfo: '=info'
            },
            templateUrl: 'my-customer.html'
        };
    });