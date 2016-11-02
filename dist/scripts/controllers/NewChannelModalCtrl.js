(function() {
    function NewChannelModalCtrl($uibModalInstance, Channels) {
        this.addChannel = function(channel) {
            Channels.addChannel(channel);
            console.log(channel);
            $uibModalInstance.close();
        };

        this.close = function() {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('taut')
        .controller('NewChannelModalCtrl', [ '$uibModalInstance', 'Channels', NewChannelModalCtrl ]);
})();
