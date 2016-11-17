(function() {
    function MainCtrl($uibModal, Channels, Messages) {
        var ctrl = this;
        ctrl.channels = Channels.all;

        ctrl.openChannelModal = function() {
            $uibModal.open({
                templateUrl: '/templates/newchannel.html',
                controller: 'NewChannelModalCtrl',
                controllerAs: 'modal',
                animation: false
            });
        };

        ctrl.setActiveChannel = function(channel) {
            ctrl.activeChannel = channel;
            ctrl.messages = Messages.getByChannelID(channel.$id);
        };

        ctrl.newMessage = "";
        
        ctrl.sendMessage = function(content, channelID) {
            Messages.sendMessage(content, channelID);
            ctrl.newMessage = "";
        };
    }

    angular
        .module('taut')
        .controller('MainCtrl', ['$uibModal', 'Channels', 'Messages', MainCtrl]);
})();
