app.controller('firstController',['$scope','firstFactoryMethod', '$filter', function($scope,firstFactoryMethod,$filter){

    $scope.info = [];
    $scope.myLoader = true;
    $scope.first = "Somple API Data"
    firstFactoryMethod.show().$promise.then(function (res) {
        $scope.info = res;
        $scope.info2 = res;
        $scope.myLoader = false;
        console.log(res)
    });
    $scope.search = function (test) {
        $scope.test = test;
        $scope.info = $filter('filter')($scope.info2, $scope.test);
    };

}])