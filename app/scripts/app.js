(function() {
    function config($stateProvider, $locationProvider) {
        SlocationProvider
            .html5Mode({
                enabled: true,
                requireBase:false
            });
    }

    angular
        .module('taut', ['ui.router', 'firebase'])
        .config(config);
})();
