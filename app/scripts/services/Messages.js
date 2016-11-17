(function() {
    function Messages($firebaseArray, $cookies) {
        var Messages = {};
        var ref = firebase.database().ref().child("messages");

        //Empty array to be set by Messages.getByChannelID
        Messages.channelMessages = [];

        // API function that sets channelMessages to an array based on firebase query of messages beloning to given channel
        Messages.getByChannelID = function(channelID) {
            var query = ref.orderByChild("channelID").equalTo(channelID);
            Messages.channelMessages = $firebaseArray(query);
        };

        //API function that adds messages to Firebase
        Messages.send = function(content, channelID) {
            Messages.channelMessages.$add({
                content: content,
                sentAt: Date.now(),
                channelID: channelID,
                username: $cookies.get('username')
            });
            Messages.newMessage = "";
        };

        return Messages;
    }
    angular
        .module('taut')
        .factory('Messages', ['$firebaseArray', '$cookies', Messages]);
})();
