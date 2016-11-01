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

    angular
        .module('taut', ['ui.router', 'firebase'])
        .config(config);
})();
