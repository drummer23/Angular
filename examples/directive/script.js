var app = angular.module('myApp', []);

app.controller('Controller', ['$scope', function($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }]);

app.directive('myCustomer', function() {
        return {
            templateUrl: 'my-customer.html'
        };
    });