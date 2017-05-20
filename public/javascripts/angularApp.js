var app = angular.module('ngapp', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/htmls/home.html',
			controller: 'MainCtrl',
		})

    $locationProvider.html5Mode(true);

}]);

app.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.text = "hello world!!";
}]);
