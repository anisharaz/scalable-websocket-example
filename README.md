# Scalable Websocket example setup in Kubernetes (k8s)

> [!IMPORTANT]
> Set up the cluster. You can use [Minikube](https://minikube.sigs.k8s.io/docs/start/) for local testing.

## Running the project

1. helm install scalablews ./k8s_helm_chart
2. write this line `<ingress_ip_address app.local` to the end of the file `/etc/hosts`

### Stack used

- Nextjs
- socket.io
- express (not required if you use the native Node.js HTTP module)
- Redis for Pub/Sub
