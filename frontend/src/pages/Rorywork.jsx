import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Rorywork = () => {

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
          date="2022 - 2023"
          iconStyle={{ background: "black", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Freelance Digital Marketer 	
          </h3>
          <p>
            <ul>
              <li> Developed and managed online marketing campaigns for a variety of clients with a focus on real estate. </li>
              <li> Increased customer click-through rates by creating engaging and informative web content. </li>
              <li> Project managing the entirety of digital marketing campaigns from initial consultation to on-time delivery. </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: "black", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Realtor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Re/Max in Paradise, Dominican Republic
          </h4>
          <p>
            <ul>
              <li> Sold residential and commercial real estate in the Dominican Republic. </li>
              <li> Built a successful property management company for the brokerage. </li>
              <li> Tasked with the role of office administrator.</li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2019"
          iconStyle={{ background: "black", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Business Development Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Duggal Team, Re/Max 2000, Toronto, Ontario
          </h4>
          <p>
            <ul>
              <li> Responsible for hiring and training realtors.  </li>
              <li> Led daily sales training sessions </li>
              <li> Developed an in-house mortgage brokerage to increase the companies bottom line.</li>
              <li>Key member of a Diamond Award winning team - the companies highest award.</li>
            </ul>
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Rorywork