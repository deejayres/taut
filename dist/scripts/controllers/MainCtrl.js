(function() {
    function MainCtrl($uibModal, Channels, Messages) {
        this.channels = Channels;
        this.channelheader = "Channels";
        this.messages = Messages;

        this.open = function() {
            $uibModal.open({
                templateUrl: '/templates/newchannel.html',
                controller: 'NewChannelModalCtrl',
                controllerAs: 'modal',
                animation: false
            });
        };

    }

    angular
        .module('taut')
        .controller('MainCtrl', ['$uibModal', 'Channels', 'Messages', MainCtrl]);
})();
