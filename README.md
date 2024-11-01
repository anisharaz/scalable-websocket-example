## Scalable Websocket setup with HaProxy as loadbalancer

### Note
The app.local is a local domain which is being resolved to 127.0.0.1(i.e localhost) by `/etc/hosts` file in linux.
Other things you can understand by reading the code. 🤖🤖🤖

### Stack used
- socket.io
- express (not required of you use native nodejs http module)
- Haproxy as loadbalancer
- Redis for Pub/Sub
- React (for frontend)
