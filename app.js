/* ===================================================================
   SENTINEL.SIEM — Standalone App  (app.js)
   =================================================================== */

// ───────── Lucide-style SVG Icon helpers ─────────
const icons = {
  shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  activity: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  alertTriangle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`,
  radar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/></svg>`,
  layoutDashboard: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  list: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>`,
  logOut: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  filter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  tag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>`,
  fileCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>`,
  terminal: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`,
  trendingUp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
};

// ───────── Mock Data ─────────
const mockEvents = [
  { _id:"evt_001", source:"snort", type:"IDS Alert", severity:"critical", description:"Possible SQL Injection attempt detected from external IP targeting /login endpoint", ip:"203.0.113.45", tags:["sqli","web","owasp-top10"], details:{payload:"1' OR '1'='1",uri:"/login",method:"POST"}, createdAt:new Date(Date.now()-120000).toISOString() },
  { _id:"evt_002", source:"suricata", type:"Network Anomaly", severity:"high", description:"Unusual outbound traffic volume detected on port 443 to unknown CDN", ip:"10.0.0.55", tags:["exfiltration","network"], details:{bytes_out:15728640,destination:"suspicious-cdn.net",duration:"45s"}, createdAt:new Date(Date.now()-300000).toISOString() },
  { _id:"evt_003", source:"ossec", type:"File Integrity", severity:"high", description:"Critical system file /etc/passwd was modified unexpectedly", ip:"192.168.1.10", tags:["fim","integrity"], details:{file:"/etc/passwd",action:"modified",user:"root"}, createdAt:new Date(Date.now()-600000).toISOString() },
  { _id:"evt_004", source:"firewall", type:"Brute Force", severity:"medium", description:"Multiple failed SSH login attempts from single source (23 attempts in 5 min)", ip:"198.51.100.22", tags:["bruteforce","ssh"], details:{attempts:23,window:"5m",target_user:"admin"}, createdAt:new Date(Date.now()-900000).toISOString() },
  { _id:"evt_005", source:"waf", type:"XSS Attempt", severity:"medium", description:"Cross-site scripting payload detected in search parameter", ip:"172.16.0.88", tags:["xss","web"], details:{payload:"<script>alert('xss')</script>",uri:"/search?q=",blocked:true}, createdAt:new Date(Date.now()-1200000).toISOString() },
  { _id:"evt_006", source:"endpoint", type:"Malware Detection", severity:"critical", description:"Ransomware binary detected and quarantined on workstation WS-042", ip:"10.0.2.42", tags:["malware","ransomware","endpoint"], details:{filename:"invoice_2024.exe",hash:"a1b2c3d4e5f6",action:"quarantined"}, createdAt:new Date(Date.now()-1500000).toISOString() },
  { _id:"evt_007", source:"dns", type:"DNS Tunneling", severity:"high", description:"Suspicious DNS query pattern consistent with data exfiltration via DNS tunneling", ip:"10.0.1.15", tags:["dns","tunneling","exfiltration"], details:{queries:847,domain:"x8f2.evil.com",avg_length:180}, createdAt:new Date(Date.now()-1800000).toISOString() },
  { _id:"evt_008", source:"cloud", type:"IAM Alert", severity:"low", description:"New IAM role created with administrative privileges in production account", ip:"52.14.88.201", tags:["iam","cloud","aws"], details:{role:"emergency-admin",account:"prod-12345",creator:"unknown-session"}, createdAt:new Date(Date.now()-2400000).toISOString() },
  { _id:"evt_009", source:"proxy", type:"C2 Communication", severity:"critical", description:"Outbound connection to known Command & Control server detected", ip:"10.0.3.77", tags:["c2","apt","threat-intel"], details:{c2_ip:"185.220.101.33",protocol:"HTTPS",beacon_interval:"30s"}, createdAt:new Date(Date.now()-60000).toISOString() },
  { _id:"evt_010", source:"syslog", type:"Privilege Escalation", severity:"high", description:"User escalated to root via sudo with suspicious command execution", ip:"192.168.1.25", tags:["privesc","sudo","linux"], details:{user:"jdoe",command:"sudo bash -c 'cat /etc/shadow'",tty:"pts/2"}, createdAt:new Date(Date.now()-450000).toISOString() },
];

let liveEvents = [...mockEvents];

// ───────── State ─────────
let currentPage = "login"; // login | dashboard | events
let sidebarCollapsed = false;
let currentUser = null;
let jwtToken = localStorage.getItem("siem_token");
const API_BASE = "http://localhost:5000/api/v1";

// Restore user
try { currentUser = JSON.parse(localStorage.getItem("siem_user")||"null"); } catch{}
if(jwtToken && currentUser) currentPage = "dashboard";

// ───────── Helpers ─────────
function formatTime(iso) {
  if(!iso) return "—";
  return new Date(iso).toLocaleTimeString();
}
function formatDateTime(iso) {
  if(!iso) return "N/A";
  return new Date(iso).toLocaleString();
}
function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

// ───────── API ─────────
async function apiRequest(path, options={}) {
  const headers = {"Content-Type":"application/json",...(options.headers||{})};
  if(jwtToken) headers["Authorization"] = "Bearer "+jwtToken;
  const res = await fetch(API_BASE+path, {...options, headers});
  if(!res.ok) { const e = await res.json().catch(()=>({message:res.statusText})); throw new Error(e.message||res.statusText); }
  return res.json();
}

async function fetchEventsFromAPI() {
  if (!jwtToken || jwtToken === "demo-token") return;
  try {
    const res = await apiRequest("/events?limit=100&page=1");
    if (res && Array.isArray(res.data)) liveEvents = res.data;
    else if (res && Array.isArray(res.events)) liveEvents = res.events;
    else if (Array.isArray(res)) liveEvents = res;
  } catch(e) {
    console.error("Failed to fetch events from API:", e);
  }
}

// ───────── Rendering ─────────
function render() {
  const app = document.getElementById("app");
  if(currentPage === "login") { app.innerHTML = renderLogin(); bindLogin(); }
  else { app.innerHTML = renderAppLayout(); bindAppLayout(); renderPageContent(); }
}

// ===== LOGIN =====
function renderLogin() {
  return `
  <div class="login-page cyber-grid">
    <div class="scan-line"></div>
    <div class="login-wrapper fade-in">
      <div class="login-logo">
        <div class="login-icon">${icons.shield}</div>
        <h1 class="login-title">SENTINEL<span class="dot">.</span>SIEM</h1>
        <p class="login-tagline">Security Event Management System</p>
      </div>
      <div class="login-card">
        <div class="login-fn">${icons.terminal}<span id="login-fn-text">sys.auth.login()</span></div>
        <form id="login-form">
          <div class="form-group">
            <label class="form-label" for="username">Username</label>
            <input class="form-input" id="username" placeholder="analyst_one" required>
          </div>
          <div class="form-group" id="email-group" style="display:none">
            <label class="form-label" for="email">Email</label>
            <input class="form-input" id="email" type="email" placeholder="analyst@soc.io">
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Password</label>
            <input class="form-input" id="password" type="password" placeholder="••••••••" required>
          </div>
          <div id="login-error" style="display:none" class="form-error">${icons.alertTriangle}<span></span></div>
          <button type="submit" class="login-btn" id="login-btn">Access System</button>
        </form>
        <div class="login-toggle"><button id="toggle-mode">Register new analyst →</button></div>
      </div>
      <p class="login-footer">Encrypted connection · TLS 1.3</p>
    </div>
  </div>`;
}

let isRegisterMode = false;
function bindLogin() {
  const form = document.getElementById("login-form");
  const toggleBtn = document.getElementById("toggle-mode");
  const emailGroup = document.getElementById("email-group");
  const fnText = document.getElementById("login-fn-text");
  const loginBtn = document.getElementById("login-btn");
  const errDiv = document.getElementById("login-error");

  toggleBtn.onclick = () => {
    isRegisterMode = !isRegisterMode;
    emailGroup.style.display = isRegisterMode ? "block" : "none";
    fnText.textContent = isRegisterMode ? "sys.auth.register()" : "sys.auth.login()";
    toggleBtn.textContent = isRegisterMode ? "← Back to login" : "Register new analyst →";
    loginBtn.textContent = isRegisterMode ? "Create Account" : "Access System";
    errDiv.style.display = "none";
  };

  form.onsubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    loginBtn.disabled = true;
    loginBtn.textContent = "Authenticating...";
    errDiv.style.display = "none";
    try {
      let res;
      if(isRegisterMode) {
        res = await apiRequest("/auth/register", {method:"POST", body:JSON.stringify({username,email,password,role:"analyst"})});
      } else {
        res = await apiRequest("/auth/login", {method:"POST", body:JSON.stringify({username,password})});
      }
      jwtToken = res.token;
      currentUser = res.user || {username, role:"analyst"};
      localStorage.setItem("siem_token", jwtToken);
      localStorage.setItem("siem_user", JSON.stringify(currentUser));
      currentPage = "dashboard";
      await fetchEventsFromAPI();
      render();
    } catch(err) {
      errDiv.querySelector("span").textContent = err.message;
      errDiv.style.display = "flex";
      // For demo: allow bypass
      if(err.message.includes("Failed to fetch") || err.message.includes("NetworkError")) {
        currentUser = {username, role:"analyst"};
        jwtToken = "demo-token";
        localStorage.setItem("siem_token", jwtToken);
        localStorage.setItem("siem_user", JSON.stringify(currentUser));
        currentPage = "dashboard";
        liveEvents = [...mockEvents];
        render();
      }
    } finally {
      loginBtn.disabled = false;
      loginBtn.textContent = isRegisterMode ? "Create Account" : "Access System";
    }
  };
}

// ===== APP LAYOUT =====
function renderAppLayout() {
  const user = currentUser || {username:"analyst"};
  return `
  <div class="app-layout">
    <aside class="sidebar${sidebarCollapsed?" collapsed":""}" id="sidebar">
      <div class="sidebar-brand">
        <div class="sidebar-brand-icon">${icons.shield}</div>
        <span class="sidebar-brand-text">SENTINEL<span class="dot">.</span>SIEM</span>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section-label nav-label">Operations</div>
        <button class="nav-item${currentPage==="dashboard"?" active":""}" data-page="dashboard">
          ${icons.layoutDashboard}<span class="nav-text">Overview</span>
        </button>
        <button class="nav-item${currentPage==="events"?" active":""}" data-page="events">
          ${icons.list}<span class="nav-text">Events</span>
        </button>
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-user">${icons.user}<span>${escapeHtml(user.username)}</span></div>
        <button class="nav-item logout" id="logout-btn">${icons.logOut}<span class="nav-text">Logout</span></button>
      </div>
    </aside>
    <div class="main-area">
      <header class="app-header">
        <button class="sidebar-toggle" id="sidebar-toggle">${icons.menu}</button>
        <div class="header-status">
          <div class="status-dot animate-pulse-glow"></div>
          <span>System Active</span>
        </div>
      </header>
      <div class="content" id="page-content"></div>
    </div>
  </div>
  <div class="detail-overlay" id="detail-overlay"></div>
  <div class="detail-panel" id="detail-panel"></div>`;
}

function bindAppLayout() {
  // Nav
  document.querySelectorAll(".nav-item[data-page]").forEach(btn => {
    btn.onclick = async () => {
      currentPage = btn.dataset.page;
      if (currentPage === "dashboard" || currentPage === "events") {
        await fetchEventsFromAPI();
      }
      render();
    };
  });
  // Sidebar toggle
  document.getElementById("sidebar-toggle").onclick = () => {
    sidebarCollapsed = !sidebarCollapsed;
    document.getElementById("sidebar").classList.toggle("collapsed", sidebarCollapsed);
  };
  // Logout
  document.getElementById("logout-btn").onclick = () => {
    jwtToken = null; currentUser = null;
    localStorage.removeItem("siem_token"); localStorage.removeItem("siem_user");
    currentPage = "login"; isRegisterMode = false; render();
  };
  // Detail overlay close
  document.getElementById("detail-overlay").onclick = closeDetail;
}

function renderPageContent() {
  if(currentPage === "dashboard") renderDashboard();
  else if(currentPage === "events") renderEvents();
}

// ===== DASHBOARD =====
function renderDashboard() {
  const total = liveEvents.length;
  const critical = liveEvents.filter(e=>e.severity==="critical").length;
  const high = liveEvents.filter(e=>e.severity==="high").length;
  const sources = [...new Set(liveEvents.map(e=>e.source))].length;

  document.getElementById("page-content").innerHTML = `
    <div class="fade-in">
      <h1 class="page-title">Threat Overview</h1>
      <p class="page-subtitle">Real-time security event monitoring</p>
    </div>
    <div class="stats-grid">
      ${statCard("Total Events",total,"activity","primary","+12% from last hour")}
      ${statCard("Critical",critical,"alertTriangle","destructive")}
      ${statCard("High Severity",high,"shield","warning")}
      ${statCard("Active Sources",sources,"radar","default")}
    </div>
    <div class="charts-row fade-in fade-in-d2">
      <div class="chart-card">
        <div class="chart-header">
          <div><div class="chart-title">Event Timeline</div><div class="chart-sub">Last 24 hours</div></div>
          ${icons.trendingUp}
        </div>
        <div class="chart-container"><canvas id="timeline-chart"></canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-header">
          <div><div class="chart-title">Severity Breakdown</div><div class="chart-sub">By classification</div></div>
        </div>
        <div class="severity-bars" id="severity-bars"></div>
      </div>
    </div>
    <div class="events-card fade-in fade-in-d3">
      <div class="events-card-header">
        <div class="events-card-title">Recent Events</div>
        <div class="events-card-sub">Live feed — click to inspect</div>
      </div>
      ${renderEventsTable(liveEvents.slice(0,6))}
    </div>`;

  drawTimelineChart();
  drawSeverityBars();
  bindTableRows();
}

function statCard(label, value, icon, variant, trend) {
  return `<div class="stat-card ${variant} fade-in fade-in-d1">
    <div class="stat-card-top">
      <div>
        <div class="stat-label">${label}</div>
        <div class="stat-value">${value}</div>
        ${trend?`<div class="stat-trend">${trend}</div>`:""}
      </div>
      <div class="stat-icon ${variant}">${icons[icon]}</div>
    </div>
  </div>`;
}

function drawTimelineChart() {
  const canvas = document.getElementById("timeline-chart");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const W = rect.width, H = rect.height;

  // Generate data
  const data = [];
  for(let i=0;i<24;i++) data.push({ events: Math.floor(Math.random()*40)+5, alerts: Math.floor(Math.random()*12) });
  const maxVal = Math.max(...data.map(d=>d.events));

  // Grid
  ctx.strokeStyle = "rgba(30,39,51,0.5)";
  ctx.lineWidth = 0.5;
  for(let y=0;y<5;y++){
    const yy = 20 + y*(H-40)/4;
    ctx.beginPath(); ctx.moveTo(40,yy); ctx.lineTo(W-10,yy); ctx.stroke();
  }

  // Y labels
  ctx.fillStyle = "#6b7a8d"; ctx.font = "10px 'JetBrains Mono'"; ctx.textAlign = "right";
  for(let y=0;y<5;y++){
    const val = Math.round(maxVal - y*maxVal/4);
    ctx.fillText(val, 35, 24+y*(H-40)/4);
  }

  // Area + line for events
  const xStep = (W-50) / (data.length-1);
  function yPos(val) { return 20 + (1-val/maxVal)*(H-40); }

  // Events area
  ctx.beginPath();
  ctx.moveTo(40, yPos(data[0].events));
  data.forEach((d,i) => ctx.lineTo(40+i*xStep, yPos(d.events)));
  ctx.lineTo(40+(data.length-1)*xStep, H-20);
  ctx.lineTo(40, H-20);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0,20,0,H);
  grad.addColorStop(0,"rgba(0,230,138,0.25)"); grad.addColorStop(1,"rgba(0,230,138,0)");
  ctx.fillStyle = grad; ctx.fill();

  ctx.beginPath();
  ctx.moveTo(40, yPos(data[0].events));
  data.forEach((d,i)=>ctx.lineTo(40+i*xStep, yPos(d.events)));
  ctx.strokeStyle = "#00e68a"; ctx.lineWidth = 2; ctx.stroke();

  // Alerts area
  ctx.beginPath();
  ctx.moveTo(40, yPos(data[0].alerts));
  data.forEach((d,i)=>ctx.lineTo(40+i*xStep, yPos(d.alerts)));
  ctx.lineTo(40+(data.length-1)*xStep, H-20);
  ctx.lineTo(40, H-20);
  ctx.closePath();
  const grad2 = ctx.createLinearGradient(0,20,0,H);
  grad2.addColorStop(0,"rgba(224,70,70,0.2)"); grad2.addColorStop(1,"rgba(224,70,70,0)");
  ctx.fillStyle = grad2; ctx.fill();

  ctx.beginPath();
  ctx.moveTo(40, yPos(data[0].alerts));
  data.forEach((d,i)=>ctx.lineTo(40+i*xStep, yPos(d.alerts)));
  ctx.strokeStyle = "#e04646"; ctx.lineWidth = 2; ctx.stroke();

  // X labels
  ctx.fillStyle = "#6b7a8d"; ctx.font = "10px 'JetBrains Mono'"; ctx.textAlign = "center";
  data.forEach((d,i) => { if(i%4===0) ctx.fillText(String(i).padStart(2,"0")+":00", 40+i*xStep, H-4); });
}

function drawSeverityBars() {
  const container = document.getElementById("severity-bars");
  if(!container) return;
  const counts = {Critical:0,High:0,Medium:0,Low:0};
  liveEvents.forEach(e => {
    const k = e.severity.charAt(0).toUpperCase()+e.severity.slice(1);
    if(counts[k]!==undefined) counts[k]++;
  });
  const max = Math.max(...Object.values(counts),1);
  const colors = {Critical:"var(--sev-critical)",High:"var(--sev-high)",Medium:"var(--sev-medium)",Low:"var(--sev-low)"};
  container.innerHTML = Object.entries(counts).map(([k,v])=>`
    <div class="sev-bar-row">
      <div class="sev-bar-label">${k}</div>
      <div class="sev-bar-track"><div class="sev-bar-fill" style="width:${(v/max)*100}%;background:${colors[k]}"></div></div>
      <div class="sev-bar-val">${v}</div>
    </div>`).join("");
}

// ===== EVENTS PAGE =====
let evtSearch = "";
let evtFilter = "all";

function renderEvents() {
  const filtered = liveEvents.filter(e => {
    const ms = !evtSearch || (e.description||"").toLowerCase().includes(evtSearch.toLowerCase()) ||
      (e.source||"").toLowerCase().includes(evtSearch.toLowerCase()) ||
      (e.ip||"").includes(evtSearch) || (e.type||"").toLowerCase().includes(evtSearch.toLowerCase());
    const mf = evtFilter==="all" || e.severity===evtFilter;
    return ms && mf;
  });
  const sevs = ["all","critical","high","medium","low","info"];

  document.getElementById("page-content").innerHTML = `
    <div class="fade-in">
      <h1 class="page-title">Event Log</h1>
      <p class="page-subtitle">${filtered.length} events · Search and filter security events</p>
    </div>
    <div class="filters-row fade-in fade-in-d1">
      <div class="search-wrap">
        ${icons.search}
        <input class="search-input" id="evt-search" placeholder="Search events, IPs, sources..." value="${escapeHtml(evtSearch)}">
      </div>
      <div class="filter-group">
        ${icons.filter}
        ${sevs.map(s=>`<button class="filter-btn${evtFilter===s?" active":""}" data-sev="${s}">${s}</button>`).join("")}
      </div>
    </div>
    <div class="events-card fade-in fade-in-d2">
      ${renderEventsTable(filtered)}
    </div>`;

  document.getElementById("evt-search").oninput = (e) => { evtSearch = e.target.value; renderEvents(); };
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.onclick = () => { evtFilter = b.dataset.sev; renderEvents(); };
  });
  bindTableRows();
}

// ===== SHARED TABLE =====
function renderEventsTable(events) {
  if(!events.length) return `<div class="empty-table">No events detected. System nominal.</div>`;
  return `<table class="events-table">
    <thead><tr><th>Severity</th><th>Source</th><th>Type</th><th>Description</th><th>IP</th><th>Time</th></tr></thead>
    <tbody>${events.map(e=>`
      <tr data-id="${e._id || e.id}">
        <td><span class="sev-badge ${e.severity}">${e.severity}</span></td>
        <td class="source-cell">${escapeHtml(e.source || "unknown")}</td>
        <td class="type-cell">${escapeHtml(e.type || "-")}</td>
        <td class="desc-cell">${escapeHtml(e.description || "")}</td>
        <td>${e.ip?`<span class="ip-cell">${icons.globe}${e.ip}</span>`:""}</td>
        <td><span class="time-cell">${icons.clock}${formatTime(e.createdAt || e.timestamp)}</span></td>
      </tr>`).join("")}</tbody></table>`;
}

function bindTableRows() {
  document.querySelectorAll(".events-table tbody tr").forEach(tr => {
    tr.onclick = () => openDetail(tr.dataset.id);
  });
}

// ===== EVENT DETAIL =====
async function openDetail(id) {
  let evt = liveEvents.find(e=>(e._id===id || e.id===id));
  if (jwtToken && jwtToken !== "demo-token") {
    try {
      const res = await apiRequest(`/events/${id}`);
      if (res && (res._id || res.id)) evt = res;
      else if (res && res.data && (res.data._id || res.data.id)) evt = res.data;
    } catch(e) {
      console.error(e);
    }
  }
  if(!evt) return;
  const panel = document.getElementById("detail-panel");
  const overlay = document.getElementById("detail-overlay");

  panel.innerHTML = `<div class="detail-panel-inner">
    <div class="detail-header">
      <h2>Event Details</h2>
      <button class="detail-close" id="detail-close">${icons.x}</button>
    </div>
    <div class="detail-meta">
      <span class="sev-badge ${evt.severity}">${evt.severity}</span>
      <span class="detail-id">${evt._id || evt.id}</span>
    </div>
    <div class="detail-type">${escapeHtml(evt.type || "-")}</div>
    <div class="detail-desc">${escapeHtml(evt.description || "")}</div>
    <div class="detail-info-grid">
      <div class="detail-info-box">
        <div class="detail-info-label">${icons.globe} Source</div>
        <div class="detail-info-value">${escapeHtml(evt.source || "unknown")}</div>
      </div>
      <div class="detail-info-box">
        <div class="detail-info-label">${icons.globe} IP Address</div>
        <div class="detail-info-value">${evt.ip||"N/A"}</div>
      </div>
      <div class="detail-info-box">
        <div class="detail-info-label">${icons.clock} Timestamp</div>
        <div class="detail-info-value">${formatDateTime(evt.createdAt || evt.timestamp)}</div>
      </div>
    </div>
    ${evt.tags&&evt.tags.length?`<div class="detail-section">
      <div class="detail-section-label">${icons.tag} Tags</div>
      <div class="detail-tags">${evt.tags.map(t=>`<span class="detail-tag">${escapeHtml(t)}</span>`).join("")}</div>
    </div>`:""}
    ${evt.details?`<div class="detail-section">
      <div class="detail-section-label">${icons.fileCode} Payload</div>
      <div class="detail-payload">${escapeHtml(JSON.stringify(evt.details,null,2))}</div>
    </div>`:""}
  </div>`;

  panel.classList.add("open");
  overlay.classList.add("open");
  document.getElementById("detail-close").onclick = closeDetail;
}

function closeDetail() {
  document.getElementById("detail-panel").classList.remove("open");
  document.getElementById("detail-overlay").classList.remove("open");
}

// ───────── Init ─────────
document.addEventListener("DOMContentLoaded", async () => {
  if (currentPage !== "login") {
    await fetchEventsFromAPI();
  }
  render();
});
window.addEventListener("resize", () => {
  if(currentPage==="dashboard") {
    const c = document.getElementById("timeline-chart");
    if(c) drawTimelineChart();
  }
});
