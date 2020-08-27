'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/

const Ws = use('Ws')

Ws.channel('chat', ({ socket }) => {
  console.log('user joined with %s socket id', socket.id)
})

Ws.channel('test', 'GameController')

Ws.channel('partida', 'PartidaController')


Ws.channel('espera', ({ socket }) => {
  console.log('user joined with %s socket id', socket.id)
  const test = socket.channel.subscriptions
  console.log(socket.channel.subscriptions.length);
  //console.log((socket.channel.subscriptions.get('espera')).forEach(value => value));
  
  //console.log('user joined with socket id' + socket.channel.subscriptions.forEach(value => console.log(value.id)))
})