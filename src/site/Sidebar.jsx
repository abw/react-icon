import React from 'react'
import Link from './Link.jsx'
import { date, version } from './Utils.jsx'

const Sidebar = () =>
  <>
    <div className="menu">
      <h4>react-icon</h4>
      <ul className="menu">
        <li><Link to="/" end text="Home"/></li>
        <li><Link to="getting-started" text="Getting Started"/></li>
        <li><Link to="icon-data-format" text="Icon Data Format"/></li>
      </ul>
    </div>
    <footer>
      <div>
        Version {version}
      </div>
      <div>
        {date}
      </div>
    </footer>
  </>


export default Sidebar