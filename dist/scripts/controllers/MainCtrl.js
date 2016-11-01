(function() {
    function MainCtrl(Channels) {
        this.channels = Channels;
        this.channelheader = "Channels";
    }

    angular
        .module('taut')
        .controller('MainCtrl', ['Channels', MainCtrl]);
})();
