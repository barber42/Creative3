// script.js

    // create the module and name it scotchApp
    var angApp = angular.module('angApp', ['ngRoute']);

    // configure our routes
    angApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/kitchen', {
                templateUrl : 'pages/kitchen.html',
                controller  : 'kitchenController'
            })
	    .when('/ballroom', {
                templateUrl : 'pages/ballroom.html',
                controller  : 'ballroomController'
            })
	    .when('/library', {
                templateUrl : 'pages/library.html',
                controller  : 'libraryController'
            })
	    .when('/lounge', {
                templateUrl : 'pages/lounge.html',
                controller  : 'loungeController'
            })
	    .when('/hall', {
                templateUrl : 'pages/hall.html',
                controller  : 'hallController'
            })
	    .when('/conserv', {
                templateUrl : 'pages/conserv.html',
                controller  : 'conservController'
            })
	    .when('/study', {
                templateUrl : 'pages/study.html',
                controller  : 'studyController'
            })
            // route for the contact page
            .when('/dining', {
                templateUrl : 'pages/dining.html',
                controller  : 'diningController'
            });

    });

    // create the controller and inject Angular's $scope
    angApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    angApp.controller('kitchenController', function($scope) {
        $scope.message = 'Look! I am an kitchen page.';
    });
    angApp.controller('ballroomController', function($scope) {
        $scope.message = 'Look! I am an ballroom page.';
    });
    angApp.controller('libraryController', function($scope) {
        $scope.message = 'Look! I am an library page.';
    });
    angApp.controller('loungeController', function($scope) {
        $scope.message = 'Look! I am an lounge page.';
    });
    angApp.controller('hallController', function($scope) {
        $scope.message = 'Look! I am an hall page.';
    });
    angApp.controller('conservController', function($scope) {
        $scope.message = 'Look! I am an conservatory page.';
    });
    angApp.controller('studyController', function($scope) {
        $scope.message = 'Look! I am an study page.';
    });
    angApp.controller('ballroomController', function($scope) {
        $scope.message = 'Look! I am a ballroom page.';
    });
    angApp.controller('diningController', function($scope) {
        $scope.message = 'dining.';
    });
