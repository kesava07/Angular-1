app.directive('header', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/header.html'
    }
}).directive('testDirective', function(){
    return{
        restrict:'E',
        scope:{
            first:'=',
            second:'=',
            title:'@',
            sumbit:'&'
        },
        templateUrl: 'directives/directive-test.html'
    }
})