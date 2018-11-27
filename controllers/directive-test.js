app.controller('directiveController', ['$scope', function ($scope) {
    $scope.add = {
        firstnum: 10,
        secondnum: 20,
        title: 'ADDITION'
    }
    $scope.mul = {
        firstnum: 10,
        secondnum: 20,
        title: 'MULTIPLY'
    }
    $scope.sub = {
        firstnum: 20,
        secondnum: 10,
        title: 'SUBTRACT'
    }
    $scope.addResult = 0;
    $scope.mulResult = 0;
    $scope.subResult = 0;
    $scope.addition = function () {
        //window.alert("hello you are doing addition");
        $scope.addResult = parseInt($scope.add.firstnum) + parseInt($scope.add.secondnum);
    }
    $scope.multiplication = function () {
        //window.alert("hello you are doing multiplication");
        $scope.mulResult = parseInt($scope.mul.firstnum) * parseInt($scope.mul.secondnum);
    }
    $scope.subtraction = function () {
        //window.alert("hello you are doing Subtraction");
        $scope.subResult = parseInt($scope.sub.firstnum) - parseInt($scope.sub.secondnum);
    }
}])