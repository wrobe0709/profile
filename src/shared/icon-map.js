import {faAngular, faBootstrap, faCss3Alt, faHtml5, faJsSquare, faLinux, faPython, faRaspberryPi, faReact} from '@fortawesome/free-brands-svg-icons'
import {faDatabase, faGuitar} from '@fortawesome/free-solid-svg-icons'

export const iconMap = new Map([
  ['React', {icon: faReact, color: '#00d8ff'}],
  ['Bootstrap', {icon: faBootstrap, color: '#563f7a'}],
  ['Ansible', {icon: faLinux, color: '#333333'}],
  ['Python', {icon: faPython, color: '#4584b6'}],
  ['PostgreSQL', {icon: faDatabase, color: '#333333'}],
  ['Raspberry Pi', {icon: faRaspberryPi, color: '#c7053d'}],
  ['C', {icon: faGuitar, color: '#333333'}],
  ['Linux', {icon: faLinux, color: '#333333'}],
  ['Angular', {icon: faAngular, color: '#b52e31'}],
  ['JavaScript', {icon: faJsSquare, color: '#f7df1e'}],
  ['HTML', {icon: faHtml5, color: '#e34f26'}],
  ['CSS', {icon: faCss3Alt, color: '#1272b7'}]
]);