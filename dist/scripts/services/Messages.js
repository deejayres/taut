(function() {
    function Messages($firebaseArray) {
        var Messages = {};
        var ref = firebase.database().ref().child("messages");

        //Empty array to be set by Messages.getByChannelID
        Messages.channelMessages = [];

        // API function that sets channelMessages to an array based on firebase query of messages beloning to given channel
        Messages.getByChannelID = function(channelID) {
            var query = ref.orderByChild("channelID").equalTo(channelID);
            Messages.channelMessages = $firebaseArray(query);
        };

        return Messages;
    }
    angular
        .module('taut')
        .factory('Messages', ['$firebaseArray', Messages]);
})();
