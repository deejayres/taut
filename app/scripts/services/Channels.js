(function() {
    function Channels($firebaseArray) {
        var Channels = {};
        var ref = firebase.database().ref().child("channels");
        var channels = $firebaseArray(ref);

        Channels.all = channels;
        return Channels;
    }

    angular
        .module('taut')
        .factory('Channels', ['$firebaseArray', Channels]);
})();
