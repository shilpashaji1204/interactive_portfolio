import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Joshwork = () => {

  return (

    <div>
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "black", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Diploma in Full-stack Web Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Lighthouse Labs, Toronto, Canada
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013 - 2023"
          iconStyle={{ background: "black", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Associate Financial Advisor 	
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          THE CO-OPERATORS:  F. Filia & Associates
          </h4>
          <p>
            <ul>
              <li> Developed  valuable, sustainable  relationships with clients to ensure long-term business. </li>
              <li> Provided consistent and personable service to customers which consistently led to F. Filia & Associates being listed as a customer favourite in service in its scope. </li>
              <li> Effectively implemented sales tactics to close deals and maintain the agency’s position as a leading provider in the area with a substantial market share. </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2009 - 2013"
          iconStyle={{ background: "black", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Bachelor of Engineering Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          UNIVERSITY OF WESTERN ONTARIO
          </h4>
          
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Joshwork