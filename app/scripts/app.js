(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase:false
            });

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/templates/home.html',
                controller: 'MainCtrl as main'
            });
    }

    function tautCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('username');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                backdrop: 'static',
                keyboard: false,
                templateUrl: "/templates/setuser.html",
                controller: 'SetUserModalCtrl',
                controllerAs: 'modal'
            });
        }
    }

    angular
        .module('taut', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', tautCookies]);
})();
