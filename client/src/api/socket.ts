import { io, Socket } from "socket.io-client";

class SocketClient {
  socket: Socket | null = null;

  connect() {
    this.socket = io(process.env.REACT_APP_SERVER_WS as string);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  on<T>(eventName: string, func: (payload: T) => void) {
    if (this.socket) {
      this.socket.on(eventName, func);
    }
  }

  emit<T>(eventName: string, payload: T) {
    if (this.socket) {
      this.socket.emit(eventName, payload);
    }
  }
}

export default SocketClient;
