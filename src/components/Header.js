import React from 'react';
import { Switch } from 'antd';
import { useUser } from '../UserContext';

const Header = ({ onViewStateChange }) => {
  const { currentUser } = useUser();

  const profilePicture = currentUser?.profilePicture || 'https://via.placeholder.com/50';

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title"><a>Synaptic Scope</a></h1>
      </div>
      <div className="header-right">
        {currentUser && <span className="user-name">{currentUser.fullName}</span>}
        <img
          src={profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <Switch
          defaultChecked={false}
          checkedChildren="Researcher"
          unCheckedChildren="User"
          onChange={onViewStateChange}
        />
      </div>
    </header>
  );
};

export default Header;
