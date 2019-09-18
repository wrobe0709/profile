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
          <FontAwesomeIcon icon={faAngular} className="home-icon-size home-angular-color"/>
          <FontAwesomeIcon icon={faReact} className="home-icon-size home-react-color"/>
          <FontAwesomeIcon icon={faJsSquare} className="home-icon-size home-js-color"/>
          <FontAwesomeIcon icon={faHtml5} className="home-icon-size home-html-color"/>
          <FontAwesomeIcon icon={faCss3Alt} className="home-icon-size home-css-color"/>
          <FontAwesomeIcon icon={faPython} className="home-icon-size home-python-color"/>
          <FontAwesomeIcon icon={faLinux} className="home-icon-size home-linux-color"/>
          <a href="https://github.com/wrobe0709/">
            <FontAwesomeIcon icon={faGithub} className="home-icon-size home-github-color"/>
          </a>
        </div>
      </div>
    );
  }
}

