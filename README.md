# 💳 payment-ui

Node.js frontend service for PaymentOS — created automatically via the IDP Lab Backstage golden path template.

## What it does

Serves the **Secure Message Vault** — a demo UI that proves service-to-service communication inside Kubernetes:

1. User types a message
2. UI sends it to `payment-service` backend via Kubernetes internal DNS
3. Backend encrypts it and returns metadata
4. UI displays: encrypted text, message ID, pod name, namespace, processing time, round-trip latency

## How it was created

A developer opened Backstage, clicked **Create → New Service**, selected:
- Language: **Node.js**
- Starter: **Full Sample App**
- Namespace: **dev**
- Team: **team-angular**

Backstage automatically:
- Created this GitHub repo with working code + CI pipeline
- Raised a PR to [idp-lab-gitops](https://github.com/idp-lab-org/idp-lab-gitops) with deployment manifests
- Registered the service in the Backstage catalog

Zero manual Kubernetes work.

## Tech Stack

- **Runtime:** Node.js + Express
- **Deployed to:** Kubernetes `dev` namespace
- **CI:** GitHub Actions → `sky2108/payment-ui` on Docker Hub
- **CD:** ArgoCD (GitOps via idp-lab-gitops)

## Service Communication

```
Browser → payment-ui:80 → /api/encrypt proxy → payment-service:80
                              (Kubernetes DNS: http://payment-service)
```

## Running Locally

```bash
npm install
node index.js
# → http://localhost:8080
```

## CI/CD Flow

Every merge to `main`:
1. GitHub Actions builds Docker image
2. Pushes `sky2108/payment-ui:<sha>` to Docker Hub
3. Updates `apps/payment-ui/deployment.yaml` in idp-lab-gitops
4. ArgoCD detects change → redeploys automatically

Part of [idp-lab-org](https://github.com/idp-lab-org) — built by [@sky2194](https://github.com/sky2194)
