var connection = new RTCMultiConnection();

// this line is VERY_important
connection.socketURL = 'http://vps-sql.ktalyse.com:9001/';

// all below lines are optional; however recommended.

connection.session = {
    audio: true,
    video: true
};

connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true
};

connection.onstream = function(event) {
    document.body.appendChild(event.mediaElement);
};

var predefinedRoomId = prompt('Please enter room-id', 'xyzxyzxyz');

connection.openOrJoin(predefinedRoomId);