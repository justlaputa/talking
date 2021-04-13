---
marp: true
---

# Kubernetes: an introduction

---

# What I'm going to share

## internal components
## operation model
## API and resource model
## A peak on Borg
---

# What I'm NOT going to cover today

## networking mechanisms
## PayPay's kubernetes setup
## programming interface

(maybe next time)

---

# First, an overview

```bash
$ kubectl apply -f nginx-deploy.yaml
```
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```

---

![](./overview-deploy.svg)

---

# Wait, I heard there is a... Master?

---

# Master(s)

![](./overview-with-master.svg)

---

![height:650px](./masters.svg)

---

# all components

![](./all-components.svg)

---

# API Object model

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-example
spec:
  containers:
  - name: ubuntu
    image: ubuntu:trusty
    command: ["echo"]
    args: ["Hello World"]
```

---

# decompose a Deployment

---

# interaction: declerative commands

---

# operation model: state change watch

[img: watch state change]

---

# rolling upgrade explained

[img: rolling upgrade]

---

# Now, let's see a little about `Borg`

---

# Google's paper

---

# Problem to solve

---

# Architecture

---

# Differences

---

# Lessons learned and improved in Kubernetes