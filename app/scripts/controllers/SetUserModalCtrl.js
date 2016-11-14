(function() {
    function SetUserModalCtrl($uibModalInstance, $cookies) {
        this.setUsername = function(name) {
            $cookies.put("username", name);
            $uibModalInstance.close();
        };
    }

    angular
        .module('taut')
        .controller('SetUserModalCtrl', ['$uibModalInstance', '$cookies', SetUserModalCtrl]);
})();
