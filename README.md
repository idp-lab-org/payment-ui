# 💳 payment-ui

Frontend service for PaymentOS — a sample Internal Developer Platform demo application.

## What is this?

This service was created automatically via the **IDP Lab Backstage golden path template**. A developer filled a form in Backstage and this entire repo — including CI pipeline and Kubernetes deployment — was generated automatically.

## Features

- **Secure Message Vault** — type a message, send it to the backend, receive it encrypted
- Demonstrates service-to-service communication inside Kubernetes
- Shows real pod name, namespace, and round-trip latency from the backend

## Tech Stack

- **Runtime:** Node.js + Express
- **Deployed to:** Kubernetes (`dev` namespace)
- **CI:** GitHub Actions → Docker Hub
- **CD:** ArgoCD (GitOps)

## Architecture

```
Browser
  ↓
payment-ui (Node.js) — port 80
  ↓ internal Kubernetes DNS
payment-service (Python) — port 80
```

## How it was created

1. Opened Backstage at http://localhost:3000
2. Clicked **Create → New Service**
3. Selected: Node.js, Full Sample, dev namespace, Team Angular
4. Backstage automatically:
   - Created this GitHub repo
   - Added CI workflow
   - Raised a PR to [idp-lab-gitops](https://github.com/idp-lab-org/idp-lab-gitops) with deployment manifests
   - Registered the service in the Backstage catalog

## Running locally

```bash
npm install
node index.js
# → http://localhost:8080
```

## CI/CD

Every push to `main`:
1. GitHub Actions builds Docker image
2. Pushes to `sky2108/payment-ui:<sha>` on Docker Hub
3. Updates `apps/payment-ui/deployment.yaml` in idp-lab-gitops
4. ArgoCD detects change and redeploys automatically

Part of [idp-lab-org](https://github.com/idp-lab-org) — Mini IDP portfolio project.
