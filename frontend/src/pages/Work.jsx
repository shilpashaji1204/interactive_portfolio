import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Work = () => {

  return (

    <div>
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "black", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Full-stack Web Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Lighthouse Labs, Toronto, Canada
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "black", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Executive Technical Recruiter
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            PlanIT Search, Toronto, Canada
          </h4>
          <p>
            <ul>
              <li> Partnered with the team to deliver quality direct sourced candidates for IT, Finance and Government Roles using Applicant Tracking Systems (Bullhorn) </li>
              <li> Conducted interviews, feedback sessions and final selection of candidates </li>
              <li> Continually built a talent pipeline to solve future business needs with a focus on specific patterns of performance </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "black", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Center for development of advance computing (C-DAC), Trivandrum, India
          </h4>
          <p>
            <ul>
              <li> Involved in analysis, specification, design, and implementation and testing phases of Software Development Life Cycle (SDLC), using Agile methodology to develop applications </li>
              <li> Analyzed business requirements & prepared technical documents </li>
              <li> Enhanced user experience and accomplished webpage objectives by creating site structure, landing pages, navigation, page optimization and graphic integration using HTML, CSS, JavaScript and Bootstrap </li>
              <li> Designed front-end of the website such as embedded graphics, and interactive documents using JavaScript, XML, HTML and CSS
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "black", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IT Recruiter- Asia Pacific (APAC)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Silverlink Technologies Pvt. Ltd.-Mumbai, India
          </h4>
          <p>
            <ul>
              <li> Partnered with the team to deliver quality direct sourced candidates for IT, Finance and Government Roles using Applicant Tracking Systems (Bullhorn) </li>
              <li> Conducted interviews, feedback sessions and final selection of candidates </li>
              <li> Continually built a talent pipeline to solve future business needs with a focus on specific patterns of performance </li>
            </ul>
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Work