import React from 'react';
import {Switch} from 'antd';
import { useState } from 'react';

const ViewSwitch = ({ onViewStateChange }) => {
    const [viewState, setViewState] = useState(false);
  
    const handleSwitch = () => {
      setViewState(!viewState);
      onViewStateChange(!viewState);
    };
  
    return (
      <Switch
        defaultChecked={false}
        checkedChildren="Researcher"
        unCheckedChildren="User"
        onChange={handleSwitch}
      />
    );
  };

export default ViewSwitch;