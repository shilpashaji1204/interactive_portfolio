import React from "react";
import ProjectItem1 from "../components/ProjectItem1";
import Scheduler from "../assets/images/Scheduler.png";
import Tweeter from "../assets/images/Tweeter.jpg";
import Lonelybook from "../assets/images/Lonelybook.jpg";
import "../styles/ShilpaProjects.css";

const ShilpaProjects = () => {

    return (

        <div className="projects">
            <h1>My Personal Projects</h1>
        <div className="projectList">
            <ProjectItem1 name="Interview Scheduler" image={Scheduler.png} githubLink="https://github.com/shilpashaji1204/scheduler"/>
            <ProjectItem1 name="Tweeter App" image={Tweeter.jpg} githubLink="https://github.com/shilpashaji1204/chiptweeter"/>
           <ProjectItem1 name="Ecommerce site" image={Lonelybook.jpg} githubLink="https://github.com/shilpashaji1204/buy_sell_listing_website"/>

        </div>
        </div>
    )
}

export default ShilpaProjects