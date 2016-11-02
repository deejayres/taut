(function() {
    function Channels($firebaseArray) {
        var Channels = {};
        var ref = firebase.database().ref().child("channels");
        var channels = $firebaseArray(ref);

        Channels.addChannel = function(channel) {
            channels.$add(channel);
        };

        Channels.all = channels;
        return Channels;
    }

    angular
        .module('taut')
        .factory('Channels', ['$firebaseArray', Channels]);
})();
