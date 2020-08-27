'use strict'

class GameController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
    console.log(socket.id);
    const test = socket.channel.subscriptions.get('test')
    const connections = []
    let id = 0;
    test.forEach(value => connections.push(value.id))
    if(connections.length == 2) {
      id++
      socket.emitTo('new:game', {id},[connections[0],connections[1]] )
      //connections = []
    }
    console.log(connections.length);
  }
}

module.exports = GameController
