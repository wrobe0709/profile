import './projects.scss';
import Project from '../project/project';
import React from 'react';
import projects from '../../projects.json';

export default class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="projects">
        <h3 className="projects-title">Projects</h3>
        <div className="projects-container">
          <div className="projects-row">
            <Project
              title={projects.theHolsteinHouse.title}
              description={projects.theHolsteinHouse.description}
              imgUrl={projects.theHolsteinHouse.imgUrl}
              githubUrl={projects.theHolsteinHouse.githubUrl}
              externalLinkUrl={projects.theHolsteinHouse.externalLinkUrl}
              technologies={projects.theHolsteinHouse.technologies}/>
            <Project
              title={projects.profile.title}
              description={projects.profile.description}
              imgUrl={projects.profile.imgUrl}
              githubUrl={projects.profile.githubUrl}
              externalLinkUrl={projects.profile.externalLinkUrl}
              technologies={projects.profile.technologies}/>
          </div>
          <div className="projects-row">
            {!projects.paperFlowers.hidden && (
              <Project
                title={projects.paperFlowers.title}
                description={projects.paperFlowers.description}
                imgUrl={projects.paperFlowers.imgUrl}
                technologies={projects.paperFlowers.technologies}/>
            )}
            {!projects.paperFlowers.hidden && (
              <Project
                title={projects.pedalPi.title}
                description={projects.pedalPi.description}
                imgUrl={projects.pedalPi.imgUrl}
                technologies={projects.pedalPi.technologies}/>
            )}
          </div>
        </div>
      </div>
      
    );
  }
}
