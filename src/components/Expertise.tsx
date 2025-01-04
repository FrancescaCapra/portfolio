import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Python",
    "SQL",
    "Linux/Unix",
    "Network Protocols",
    "Penetration Testing Tools"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Terraform",
    "AWS",
    "Azure",
    "Linux",
    "CI/CD",
    "BGP Protocol",
    "Distributed Systems"
];

const labelsThird = [
    "MITRE ATT&CK",
    "Threat Intelligence",
    "Cybersecurity Risk Assessment",
    "LangChain",
    "LLMs",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development & Networking</h3>
                    <p>I have experience building diverse web applications and working on network protocols like BGP. My focus includes combining modern web technologies with secure communication mechanisms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps, Systems, & Security</h3>
                    <p>My expertise extends to setting up secure CI/CD pipelines, automating deployments, and ensuring the resilience of distributed systems. I also work on developing secure infrastructures and testing protocols.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Cybersecurity & AI</h3>
                    <p>Leveraging my knowledge of cybersecurity, I develop solutions to address vulnerabilities and enhance risk assessment using frameworks like MITRE ATT&CK. I also integrate AI tools for intelligent decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
