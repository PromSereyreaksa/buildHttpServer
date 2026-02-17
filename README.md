> A minimal HTTP server built from scratch in Node.js — a playground for networking, TCP, and HTTP internals, Whilst following Codecrafters' "Build your own HTTP server" Challenge.

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)  
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
[![TCP](https://img.shields.io/badge/TCP-007ACC?style=for-the-badge&logo=azure&logoColor=white)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)  

### **Learning Resources**

I’m learning HTTP, TCP, and networking concepts while building this project. Key resources I’m following include:  

- [MDN Web Docs – HTTP Guides](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides) – for understanding **HTTP requests, responses, headers, and protocol flow**.  
- [CodeCrafters – Build Your Own HTTP Server](https://app.codecrafters.io/courses/http-server/overview) – a hands-on challenge teaching how to build an HTTP server from scratch using **TCP primitives**, handle **GET/POST requests**, serve files, and manage **multiple concurrent connections**.

---

## **About**

souHTTP is my personal project to **build a lightweight HTTP server from scratch** and understand how the HTTP protocol works at its core.  

Instead of using frameworks like Express, this server uses **Node.js’ built‑in TCP networking module (`net`)** to handle raw sockets and interpret HTTP requests.  

souHTTP provides a foundation for experimenting with routing, static file serving, custom headers, and other networking concepts.

---

## **HTTP Overview**

HTTP (Hypertext Transfer Protocol) is the underlying application protocol that powers the Web. It is a **client‑server protocol**, meaning the client (like a browser) initiates a request, and the server provides a response.  

- A single web document can be composed of multiple resources—text, images, scripts, videos—often fetched from different servers.  
- Clients and servers exchange **individual messages**: the client sends a request and the server replies with a response.  
- HTTP operates at the **application layer**, on top of TCP (transport layer) and IP (network layer).  
- It’s extensible and supports actions beyond retrieving documents, such as submitting form data or updating parts of a page on demand.  

![HTTP Overview](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)  

souHTTP builds on these concepts by handling TCP connections directly and parsing HTTP text manually, which gives insight into how these messages are exchanged “under the hood.”

---

## **Core Concepts**

- Raw TCP socket communication in Node.js  
- Parsing and responding to HTTP requests  
- Event‑driven network programming with socket events  
- Lightweight, modular server design  
- JavaScript with Node.js (CommonJS modules as used by CodeCrafters) :contentReference[oaicite:1]{index=1}  

---

## **Tech Stack**

- **Node.js**
- **TCP Networking (`net` module)**  
- **JavaScript (CommonJS module system)**  

---

© 2026 Prom Sereyreaksa
