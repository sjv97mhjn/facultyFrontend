window.faculty = angular.module('faculty', ['ngAnimate', 'ngRoute'])
.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
        .when('/', {
            controller: 'SignupCtrl',
            templateUrl: '/app/templates/Signup.html'
        })
        .when('/Signup', {
        	controller: 'Signup',
        	templateUrl: '/app/templates/Signup.html'
        });

        $locationProvider.html5Mode(true);
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
]);


faculty.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
