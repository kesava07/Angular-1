app.config(['$resourceProvider', '$stateProvider', '$urlRouterProvider', function ($resourceProvider, $stateProvider, $urlRouterProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: "website/home.html"
        })
        .state('login', {
            url: '/login',
            templateUrl: 'website/login.html'
        })
        .state('directive', {
            url: '/directive',
            templateUrl: 'website/operations.html'
        })
}]);