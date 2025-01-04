import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career and Education History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="09/2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">EIT Digital Master’s – Double Degree in Cybersecurity</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Trento & University of Turku</h4>
            <p>
              Acquisition of skills in penetration testing, network security, and basic ethical hacking.
            </p>
            <p><strong>Relevant courses:</strong> Software Security Testing, Distributed Systems, Network Security, Software Design and Architecture, Firewall and IPS, Cybersecurity Risk Assessment, Privacy and IPR.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="09/2019 - 08/2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor’s Degree in Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Politecnico di Torino, Italy</h4>
            <p>
              Focused on computer science and engineering with hands-on experience in various technical disciplines.
            </p>
            <p><strong>Relevant courses:</strong> Algorithms and Programming Techniques, Computer Architecture, Introduction to Databases, Object-Oriented Programming, Computer Networks, Operating Systems.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="03/2020 - 09/2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Graphic Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Kernel Sistemi, Turin, Italy</h4>
            <p>
              Increased LinkedIn followers by 25% by managing daily corporate updates. Designed impactful advertising campaigns that led to a 45% increase in event attendance.
            </p>
            <p>Measured key project indicators like engagement rate, number of followers, and click-through rate (CTR).</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="12/2022 - 07/2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Waitress</h3>
            <h4 className="vertical-timeline-element-subtitle">Signorvino, Turin, Italy</h4>
            <p>
              Memorized and accurately described wine varieties to customers, boosting wine sales by 10% over 6 months. 
            </p>
            <p>Handled an average of 25-30 tables per 
