import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
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
            date="2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">EIT Digital Master’s in Cybersecurity</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Turku, Finland & University of Trento, Italy</h4>
            <p>
              Focus: Network Security, Cybersecurity Risk Assessment, Distributed Systems
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor’s in Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Politecnico di Torino, Italy</h4>
            <p>
              Focus: Algorithms, Operating Systems, Database Systems, Object-Oriented Programming
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cybersecurity Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Turku, Finland</h4>
            <p>
              Projects: Penetration Testing, Cybersecurity Risk Assessment, BGP Protocol Simulator
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Graphic Designer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Kernel Sistemi, Turin, Italy</h4>
            <p>
              Focus: Advertising Campaigns, LinkedIn Engagement, Visual Content Creation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Waitress</h3>
            <h4 className="vertical-timeline-element-subtitle">Signorvino, Turin, Italy</h4>
            <p>
              Improved customer service efficiency and product knowledge, leading to increased wine sales.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
