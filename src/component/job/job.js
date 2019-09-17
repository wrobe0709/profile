import './job.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import React from 'react';
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import {iconMap} from '../../shared/icon-map';

export default class Job extends React.Component {
  render() {
    return (
      <div  className="job-container">
        <div className="job-timeframe">
          {this.props.yearStart} - {this.props.yearEnd}
        </div>
        <div className="job-marker"></div>
        <div className="job-title-desription">
          <div className="job-title-container">
            <div className="job-title">
              {this.props.title}
            </div>
            <div>
              {this.props.technologies.map((value, index) => {
                return <FontAwesomeIcon
                  className="job-technology-icon"
                  color={iconMap.get(value).color}
                  key={index}
                  icon={iconMap.get(value).icon}
                />
              })}
            </div>
          </div>
          <div>
            {this.props.description.map((value, index) => {
              return <div className="job-detail-container" key={index}>
                <FontAwesomeIcon className="job-detail-bullet" icon={faCircle} />
                <span>{value}</span>
              </div>
            })}
          </div>
        </div>
      </div>
    );
  }
}

Job.propTypes = {
  title: PropTypes.string,
  technologies: PropTypes.array,
  yearStart: PropTypes.string,
  yearEnd: PropTypes.string,
  description: PropTypes.string
};
