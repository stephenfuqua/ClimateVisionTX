var app = angular.module('ClimateVisionTx', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/Home', {
        controller: 'homeController',
        templateUrl: '/app/views/home.html'
    })
    .when('/Discourse', {
        controller: 'twitterController',
        templateUrl: '/app/views/twitter.html'
    })
    .when('/Envisioning', {
        controller: 'envisioningController',
        templateUrl: '/app/views/envisioning.html'
    })
    .when('/Why', {
        controller: 'whyController',
        templateUrl: '/app/views/why.html'
    })
    .when('/Learning', {
        controller: 'learningController',
        templateUrl: '/app/views/learning.html'
    })
    .when('/Contact', {
        controller: 'contactController',
        templateUrl: '/app/views/contact.html'
    })
    .otherwise({ redirectTo: '/Home' });
});

