/**
 * Created by LuisGuillermo on 5/6/2015.
 */
/**
 * The configuration module.
 */
angular.module('Instagram.config', [])
    .constant('CONFIG_URL', {
        BACKEND_BASE_URI: 'http://localhost:3000/',
        REDIRECT_URI: 'http://localhost:8080/',
        CLIENT_ID: '03d3fb648d39408da13776b1d7b8421a',
        IG_AUTHORIZATION_ENDPOINT: 'https://api.instagram.com/oauth/authorize'
    });


/**
 * The main module
 */
angular.module('Instagram', ['ngRoute', 'ngMessages', 'satellizer', 'Instagram.config'])
    .config(function($routeProvider, $authProvider, CONFIG_URL) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl'
            })
            .when('/photo/:id', {
                templateUrl: 'views/detail.html',
                controller: 'DetailCtrl'
            })
            .otherwise('/');

        $authProvider.loginUrl = CONFIG_URL.BACKEND_BASE_URI + 'auth/login';
        $authProvider.signupUrl = CONFIG_URL.BACKEND_BASE_URI + 'auth/signup';
        $authProvider.oauth2({
            name: 'instagram',
            url: CONFIG_URL.BACKEND_BASE_URI + 'auth/instagram',
            redirectUri: CONFIG_URL.REDIRECT_URI,
            clientId: CONFIG_URL.CLIENT_ID,
            requiredUrlParams: ['scope'],
            scope: ['likes'],
            scopeDelimiter: '+',
            authorizationEndpoint: CONFIG_URL.IG_AUTHORIZATION_ENDPOINT
        });
    });