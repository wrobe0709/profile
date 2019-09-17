import './project.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import React from 'react';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {iconMap} from '../../shared/icon-map';

export default class Project extends React.Component {

  render() {
    return (
      <div id="project" className="project-container">
        <div className="project-marker"></div>
        <div className="project-image-container">
          <img className="project-image" alt="" src={this.props.imgUrl}></img>
        </div>
        <div className="project-details-container">
          <div className="project-title-container">
            { this.props.title }
            <div>
              <a href={this.props.githubUrl}>
                <FontAwesomeIcon icon={faGithub} className="project-icon-size"/>
              </a>
              <a href={this.props.externalLinkUrl}>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="project-icon-size"/>
              </a>
            </div>
          </div>
          <div className="project-description-container">
            { this.props.description }
          </div>  
          <div className="project-technology-container">
            <span>
              {this.props.technologies.map((value, index) => {
                return <FontAwesomeIcon
                  className="project-icon-size project-technology-item"
                  color={iconMap.get(value).color}
                  key={index}
                  icon={iconMap.get(value).icon}
                />
              })}
            </span>
          </div>  
        </div>    
      </div>
    );
  }
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  externalLinkUrl: PropTypes.string,
  technologies: PropTypes.array
};
