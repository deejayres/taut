(function() {
    function MainCtrl($uibModal, Channels) {
        this.channels = Channels.all;
        this.channelheader = "Channels";

        this.open = function() {
            $uibModal.open({
                templateUrl: '/templates/newchannel.html',
                controller: 'NewChannelModalCtrl as modal',
                animation: false
            });
        };
    }

    angular
        .module('taut')
        .controller('MainCtrl', ['$uibModal', 'Channels', MainCtrl]);
})();
