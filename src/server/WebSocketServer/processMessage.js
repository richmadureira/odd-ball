const movePlayer = require("./movePlayer.js");
const GameState = require("../gameState");
const broadcast = require("../WebSocketServer/broadcast.js");

function processMessage(connections, playerId, datagram) {
    if (datagram.type !== 'utf8') return;

    let input = JSON.parse(datagram.utf8Data);

    switch (input.type) {
        case "pointer-enter":
            break;
        case "coordinates":
            movePlayer(connections, playerId, input);
            break;
        case "shot":
            // console.log(input.id);
            if (GameState.evaluateShot(connections, GameState.getPlayers(), input.id)) {
                broadcast(connections, {
                    "type": "update-score",
                    "players": GameState.getPlayers()
                });
            }
            break;
        case "update-name":
            GameState.setName(input.id, input.name);
            broadcast(connections, {
                "type": "update-name",
                "id": input.id,
                "name": input.name
            });
            break;
    }
}

module.exports = processMessage;