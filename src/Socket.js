import SocketIO from 'socket.io-client';
const SOCKET_URL = 'api.deviants.cf:1234';

let socket = SocketIO(SOCKET_URL);

export default socket;
