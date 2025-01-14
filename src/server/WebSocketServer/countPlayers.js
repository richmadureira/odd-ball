/**
 * @param {*} connections - referência ao vetor de conexões
 *  - conte quantas conexões no vetor recebido tem
 *    o atributo connected igual a true
 * @return {Number} total de conexões ativas
 * @export countPlayers
 */

function countPlayers(connections) {
    var Number = 0;
    for (let index = 0; index < connections.length; index++) {
        if (connections[index].connected == true)
            Number++;
    }
    return Number;
}
module.exports = countPlayers;
