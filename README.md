# 🛡️ Threatara-Dash (SENTINEL.SIEM)

> **A cutting-edge, frontend Security Information and Event Management (SIEM) dashboard interface, seamlessly integrated with the Mini-SIEM API.**

![Threatara-Dash](https://img.shields.io/badge/Status-Active-success.svg)
![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E.svg?logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26.svg?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Custom_Variables-1572B6.svg?logo=css3)

---

## 📖 About the Project

**Threatara-Dash** (internally codenamed *SENTINEL.SIEM*) is a highly responsive, standalone security event monitoring dashboard. Built entirely using Vanilla JavaScript, semantic HTML5, and modern CSS3, it offers an exceptionally fast, lightweight, and bloat-free experience for security analysts.

Designed as the Phase 1 web interface for the **Custom Mini-SIEM API**, this dashboard allows security teams to ingest, monitor, and investigate network anomalies, intrusion alerts, and cloud IAM activities in real-time.

---

## ✨ Key Features

- **🔐 Secure Analyst Access:** Complete authentication flow supporting user registration and JWT-based session management.
- **📊 Real-time Threat Overview:** Dynamic visualizations including an event timeline chart and severity bar breakdowns.
- **🔍 Advanced Event Log:** Instantly search through security events by IP, source, description, or filter by severity (Critical, High, Medium, Low).
- **🕵️ Deep-Dive Inspection:** Click on any event to open a detailed inspection panel revealing payloads, tags, source IPs, and formatted timestamps.
- **⚡ Zero Dependencies:** Lightning-fast load times. No heavy frontend frameworks or build steps required.
- **🛡️ Graceful Degradation:** Automatic fallback to locally simulated event telemetry if the API connection drops or becomes unreachable.

---

## 🔌 API Integration (Mini-SIEM Phase 1)

This app natively consumes the **Mini-SIEM API Basic Rollout**. Below are the endpoints supported and integrated directly into the dashboard state:

### 🔑 Authentication (`/api/v1/auth`)
- `POST /auth/register` — Registers a new security analyst. (Payload: `username`, `email`, `password`, `role`)
- `POST /auth/login` — Authenticates an analyst and retrieves a secure JWT token for subsequent requests.

### 🚨 Event Management (`/api/v1/events`)
- `POST /events` — System ingestion endpoint for pushing security logs to the backend. (Utilized by external data sources, WAFs, IDSs, etc.)
- `GET /events` — Retrieves a paginated and filterable list of security events. (e.g., `?limit=100&page=1&severity=high`).
- `GET /events/:event_id` — Fetches complete, detailed telemetry for a specific isolated security event, pulling live JSON payloads directly into the UI inspector.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need the **Mini-SIEM backend** running locally on port `5000` (or update the `API_BASE` constant in `app.js` to point to a deployed environment).
- **Backend URL:** `http://localhost:5000/api/v1`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HovSaintBrandon/Threatara-Dash.git
   cd Threatara-Dash
   ```

2. **Serve the Application:**
   Because Threatara-Dash is completely dependency-free, you can serve it using any basic HTTP server.
   
   *Using Node.js:*
   ```bash
   npx serve .
   ```
   *Using Python:*
   ```bash
   python3 -m http.server 8080
   ```
   *Or simply use the **Live Server** extension in VS Code!*

3. **Open your browser:**
   Navigate to `http://localhost:8080` (or whichever port your local server is using). Register a new analyst account and start monitoring!

---

## 🎨 Design & Architecture

Threatara-Dash leverages a custom-built design system stored in `Styles.css`, employing CSS variables for easy theming (including a sleek dark mode with cyber-grid accents and neon status indicators). DOM manipulations and state are gracefully handled within `app.js`, utilizing modern ES6+ `async/await` features to interact seamlessly with the external SIEM API.

---

*“Stay vigilant. Keep your systems secure.”* 🛡️
