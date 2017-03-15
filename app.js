angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    
    $locationProvider.html5Mode(true);

    //routes
    $routeProvider
	  .when('/', {
	    templateUrl: 'home.html',
	    controller: 'MainCtrl'
	  })
	  .when('/shows/:id', {
	    templateUrl: 'detail.html',
	    controller: 'DetailCtrl'
	  })
	  .when('/login', {
	    templateUrl: 'login.html',
	    controller: 'LoginCtrl'
	  })
	  .when('/signup', {
	    templateUrl: 'signup.html',
	    controller: 'SignupCtrl'
	  })
	  .when('/add', {
	    templateUrl: 'add.html',
	    controller: 'AddCtrl'
	  })
	  .otherwise({
	    redirectTo: '/'
	  });


  }]);