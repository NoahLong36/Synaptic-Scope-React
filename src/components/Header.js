import React, { useState } from 'react';
import { Switch } from 'antd';

const Header = ({ onViewStateChange }) => {
  const [viewState, setViewState] = useState(false);

  const handleSwitch = () => {
    setViewState(!viewState);
    onViewStateChange(!viewState);
  };

  return (
    <header className='header'>
      <div className="header-content">
        <h1 className='title'><a>Synaptic Scope</a></h1>
      </div>
      <div className='switch-container'>
        <Switch
          defaultChecked={false}
          checkedChildren="Researcher"
          unCheckedChildren="User"
          onChange={handleSwitch}
        />
      </div>
    </header>
  );
};

export default Header;