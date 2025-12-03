import React from 'react';
import './modalstyle.css';

const Modal7 = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={onClose} className="close">&times;</button>
        </div>
        <div className="modal-body">
          <h3>Homelab: Self-Hosted Infrastructure & Local AI</h3>

          <p>
            Outside of robotics, one of my favorite ongoing projects is building and refining my proxmox homelab. I run a
            self-hosted NAS to store all my files, backups, and project data, and it's become the central hub for
            everything I work on. I set it up so I can securely access it from anywhere in the world using Cloudflare
            Tunnels and a custom domain, basically turning my home server into a private cloud that I fully control.
          </p>

          <h4>Infrastructure & Network</h4>
          <p>
            My homelab also includes a Raspberry Pi that runs n8n for automation workflows and Pi-hole for network-wide
            ad blocking and DNS filtering. I actually 3D-printed a custom case for it and added a small screen on the
            front as a live dashboard, which shows system stats and network activity. 
          </p>

          <h4>Local AI Assistant</h4>
          <p>
            For AI-related projects, I use an NVIDIA Jetson to run wake-word detection and speech processing locally.
            It listens for commands and triggers workflows through n8n, while my main workstation handles the heavier
            LLM inference. Together, they form a local AI assistant that can respond to me in real time, automate tasks,
            and even interact with tools like Spotify or my calendar through MCP (Model Context Protocol) integrations, all
            without relying on cloud services.
          </p>

          <h4>Tech Stack</h4>
          <ul>
            <li><strong>Storage:</strong> Self-hosted NAS 4TB RAID1 configuration with remote access via Cloudflare Tunnels</li>
            <li><strong>Automation:</strong> n8n workflows for smart home task automation and AI integrations</li>
            <li><strong>Network:</strong> Pi-hole for DNS filtering and network-wide ad blocking, 8 port network switch providing ethernet to my devices</li>
            <li><strong>AI Processing:</strong> NVIDIA Jetson for wake-word detection and speech processing</li>
            <li><strong>LLM Inference:</strong> Local desktop workstation for running large language models on ollama</li>
            <li><strong>Integrations:</strong> Proxmox for creating multiple VM's/containers, MCP (Model Context Protocol) for Spotify, google calendar, and other services</li>
            <li><strong>Custom Hardware:</strong> 3D-printed 10" server rack with integrated display dashboard</li>
          </ul>

          <p>
            This homelab has become a creative space for me: a place where I experiment with infrastructure, automation,
            and AI systems that support both my personal life and my engineering projects.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Modal7;
