/**
 * Created by LuisGuillermo on 5/6/2015.
 */
angular.module('Instagram')
    .controller('HomeCtrl', function($scope, $window, $rootScope, $auth) {
        /**
         * Verifies if is authenticated.
         */
        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };

        /**
         * Links the instagram account
         */
        $scope.linkInstagram = function() {
            $auth.link('instagram')
                .then(function(response) {
                    $window.localStorage.currentUser = JSON.stringify(response.data.user);
                    $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
                });
        };

    });