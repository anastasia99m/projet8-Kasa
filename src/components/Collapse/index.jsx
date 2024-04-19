import React, { useState } from 'react';
import './collapse.scss'

const Collapse = ({ title, content, arrowImage }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return (
      <div className="collapse">
        <button onClick={toggleCollapse} className="collapse-toggle">
          {title}
          <img
          className={`arrow ${isCollapsed ? 'down' : 'up'}`}
          src={arrowImage}
          alt="Flèche"
          />
        </button>
        {!isCollapsed && <div className="collapse-content">{content}</div>}
      </div>
    );
  };
  
  export default Collapse;