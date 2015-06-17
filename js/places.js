app.controller('PlacesCtrl', function($scope,$http) {

    //add data
    $scope.places = [
        {name: 'Zurich', zip:'8000'},
        {name: 'Uster', zip: '8610'}
    ];

    //overwrite data from request
    $http.get("data/places.json").success(function(response) {
        $scope.places = response.records;
    });

});