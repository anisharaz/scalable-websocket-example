# Scalable Websocket example setup in Kubernetes (k8s)

> [!IMPORTANT]
> Set up the cluster. You can use [Minikube](https://minikube.sigs.k8s.io/docs/start/) for local testing.

## Setting up the project

1. You can build the Docker image or use the prebuilt image `aaraz/wsclient:1.1` and `aaraz/wsserver:1.1`.
2. Apply the k8s resources using `kubectl apply -f file_name.yaml` from the Kubernetes folder.
3. Change the domain name in the `service_ingress.yml` file to your domain name (for testing you can use `app.local` and update the `/etc/hosts` file to point the domain to the ingress IP address).

## Sequence of applying the resources

1. Redis deployment and service.
2. Wsserver deployment and service.
3. Wsclient deployment and service.
4. Ingress.

### Stack used

- Nextjs
- socket.io
- express (not required if you use the native Node.js HTTP module)
- Redis for Pub/Sub
