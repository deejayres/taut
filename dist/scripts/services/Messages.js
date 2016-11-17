(function() {
    function Messages($firebaseArray, $cookies) {
        var Messages = {};
        var ref = firebase.database().ref().child("messages");
        var allMessages = $firebaseArray(ref);

        Messages.getByChannelID = function(channelID) {
            var query = ref.orderByChild("channelID").equalTo(channelID);
            return $firebaseArray(query);
        };

        Messages.sendMessage = function(content, channelID) {
            allMessages.$add({
                content: content,
                sentAt: Date.now(),
                channelID: channelID,
                username: $cookies.get('username')
            });
        };

        return Messages;
    }
    angular
        .module('taut')
        .factory('Messages', ['$firebaseArray', '$cookies', Messages]);
})();
