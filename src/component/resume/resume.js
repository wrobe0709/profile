import './resume.scss';
import Job from '../job/job';
import React from 'react';
import jobs from '../../jobs.json';

export default class Resume extends React.Component {
  render() {
    return (
      <div id="resume">
        <div className="resume-container">
          <h3 className="resume-container-title">Resume</h3>
          <Job
            title={jobs.softwareEngineer.title}
            technologies={jobs.softwareEngineer.technologies}
            yearStart={jobs.softwareEngineer.yearStart}
            yearEnd={jobs.softwareEngineer.yearEnd}
            description={jobs.softwareEngineer.description}
          />
          <Job
            title={jobs.dataAnalyst.title}
            technologies={jobs.dataAnalyst.technologies}
            yearStart={jobs.dataAnalyst.yearStart}
            yearEnd={jobs.dataAnalyst.yearEnd}
            description={jobs.dataAnalyst.description}
          />
          <Job
            title={jobs.accountManager.title}
            technologies={jobs.accountManager.technologies}
            yearStart={jobs.accountManager.yearStart}
            yearEnd={jobs.accountManager.yearEnd}
            description={jobs.accountManager.description}
          />
        </div>
      </div>
    );
  }
}
