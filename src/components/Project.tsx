import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/yourgithub/bgp-protocol-simulator" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yourgithub/bgp-protocol-simulator" target="_blank" rel="noreferrer"><h2>BGP Protocol Simulator</h2></a>
                <p>Developed a BGP protocol simulator with 20 routers from a cold start using Docker containers. This project focused on secure communication and routing simulation in distributed systems.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yourgithub/pentesting-web-app" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yourgithub/pentesting-web-app" target="_blank" rel="noreferrer"><h2>Penetration Testing for Web Applications</h2></a>
                <p>Conducted penetration testing on a web application to identify and mitigate security vulnerabilities. The project involved simulating real-world attacks to enhance system resilience.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yourgithub/ds-project" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yourgithub/ds-project" target="_blank" rel="noreferrer"><h2>Distributed Systems Protocol</h2></a>
                <p>Implemented a fault-tolerant distributed system using a quorum-based approach for communication between replicas. Ensured secure data consistency and coordination across the system.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yourgithub/risk-assessment" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yourgithub/risk-assessment" target="_blank" rel="noreferrer"><h2>Cybersecurity Risk Assessment</h2></a>
                <p>Performed a detailed cybersecurity risk assessment for a networked environment. Analyzed threats using frameworks like MITRE ATT&CK and recommended mitigation strategies.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yourgithub/network-security-tools" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yourgithub/network-security-tools" target="_blank" rel="noreferrer"><h2>Network Security Tools</h2></a>
                <p>Built a suite of network security tools for analyzing and monitoring network traffic. Leveraged Python for scripting and automation in network security operations.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
