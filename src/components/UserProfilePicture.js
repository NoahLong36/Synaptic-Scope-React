import React from 'react';

const getInitials = (fullName) => {
  const names = fullName.split(' ');
  const initials = names[0][0] + (names[1] ? names[1][0] : '');
  return initials.toUpperCase();
};

const getBackgroundColor = (fullName) => {
  const colors = ['#FFD700', '#FF6347', '#4682B4', '#32CD32']; // Four background colors
  const index = fullName.charCodeAt(0) % colors.length;
  return colors[index];
};

const UserProfilePicture = ({ fullName }) => {
  if (!fullName) {
    return (
      <div
        style={{
          backgroundColor: '#E5E7EB', // Default gray background
          color: '#9CA3AF', // Default text color
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          fontSize: '1.5rem',
        }}
      >
        ?
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(fullName),
        color: 'white',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        fontSize: '1.5rem',
      }}
    >
      {getInitials(fullName)}
    </div>
  );
};

export default UserProfilePicture;
