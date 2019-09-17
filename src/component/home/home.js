import './home.scss';
import {faAngular, faCss3Alt, faGithub, faHtml5, faJsSquare, faLinux, faPython, faReact} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div id="home" className="home-container">
        <h1>
          Will Robertson
        </h1>
        <div className="home-icon-row">
          <FontAwesomeIcon icon={faAngular} className="home-icon-size" style={{color: '#b52e31'}}/>
          <FontAwesomeIcon icon={faReact} className="home-icon-size" style={{color: '#00d8ff'}}/>
          <FontAwesomeIcon icon={faJsSquare} className="home-icon-size" style={{color: '#f7df1e'}}/>
          <FontAwesomeIcon icon={faHtml5} className="home-icon-size" style={{color: '#e34f26'}}/>
          <FontAwesomeIcon icon={faCss3Alt} className="home-icon-size" style={{color: '#1272b7'}}/>
          <FontAwesomeIcon icon={faPython} className="home-icon-size" style={{color: '#4584b6'}}/>
          <FontAwesomeIcon icon={faLinux} className="home-icon-size" style={{color: '#333333'}}/>
          <a href="https://github.com/wrobe0709/">
            <FontAwesomeIcon icon={faGithub} className="home-icon-size" style={{color: '#333'}}/>
          </a>
        </div>
      </div>
    );
  }
}

