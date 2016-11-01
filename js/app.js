var hangarApp = angular.module("hangarApp", [
	'ngRoute',
	'myApp'
]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'ListController'
	}).
	when('/main', {
		templateUrl: 'partials/main.html',
		controller: 'DetailsController'
	}).
	when('/songdetail', {
		templateUrl: 'partials/songdetail.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/main'
	});
}]);