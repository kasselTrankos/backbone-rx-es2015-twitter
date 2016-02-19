import {InsertTweet,GetIdFromAccount, connect, disconnect} from './../../db';
import {isPortOpen} from './../../utils/port';
import Twit from 'twit';
import portfinder from 'portfinder';
import SocketIo from 'socket.io';
var T = new Twit({
  consumer_key: 'YcsBUJYAH5LYXUkFFHJWQxqIk',
  consumer_secret: 'PCArQ1hqitctQOG1JY2OHiOvBLbuuYRaFRWsp0aBeedZkDx0zn',
  access_token: '188811579-r04M27PtgCoeLBqNIXxjMgJ5a6KlkJC6kik9oEfH',
  access_token_secret: 'cc2vaceKJAAOiAhKjc90VWqoMpi4Dmx27DIUtyUCEfx8r'
});

const Streaming = (serverSocket, _account)=>{
  let account = _account || 'kasselTrankos';
    var stream = T.stream('user', { track: account });
    console.log(' CAMBIA LA CUENTA', account);
    if(serverSocket!==null){
      var io = new SocketIo(serverSocket);
      io.on('connection', (socket)=>{ console.log(' jodeeeer que pasa!!! SOCKET CONEXION IS DONE!!!! read'); });
      stream.on('tweet', function(tweet){
        connect();//kjoder etalles molones q trane de cabeza
        GetIdFromAccount(account)
        .then((doc)=>InsertOrUpdateTweet(tweet, account.name, account._id))
        .then((doc)=>{
          disconnect();
          console.log(' joder tengo un tweet', doc.text);
          io.emit('tweet', doc);
        })
        .catch((err)=>{
          disconnect();
          console.log('necesito trabajar los errores', err);
        });
      });
      io.on('error', (error, req, res) => {
        var json;
        if (error.code !== 'ECONNRESET') {
          console.error('proxy error', error);
        }
        if (!res.headersSent) {
          res.writeHead(500, {'content-type': 'application/json'});
        }

        json = {error: 'proxy_error', reason: error.message};
        res.end(JSON.stringify(json));
      });
      io.path('/twitter');
    }

}
export {Streaming}
