(function() {
    function Channels($firebaseArray, Messages) {
        var Channels = {};
        var ref = firebase.database().ref().child("channels");

        // Firebase query reference as array
        var channels = $firebaseArray(ref);

        // API function to add channel to Firebase
        Channels.addChannel = function(channel) {
            channels.$add(channel);
        };

        // API function to set the actively selected channel and call to Messages API to get associated messages
        Channels.setActiveChannel = function(channel) {
            Channels.activeChannel = channel;
            Messages.getByChannelID(channel.$id);
            console.log(Channels.activeChannel);
        };

        // Array of all channels in firebase.
        Channels.all = channels;
        return Channels;
    }

    angular
        .module('taut')
        .factory('Channels', ['$firebaseArray', 'Messages', Channels]);
})();
