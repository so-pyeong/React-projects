import React from 'react';
import DeveloperDetail from './DeveloperDetail';
import '../styles/AboutMe.css';

const AboutMe = ({ profileData, selectedDeveloper, onDeveloperClick, onBack }) => {
  return (
    <div className="AboutMe">
      {!selectedDeveloper ? (
        <>
          <h2>About Me</h2>
          <div className="profile-list">
            {profileData.map((profile) => (
              <div
                key={profile.id}
                className="profile-card"
                onClick={() => onDeveloperClick(profile)}
              >
                <img src={profile.imgSrc} alt={profile.name} className="profile-image" />
                <h3>{profile.name}</h3>
                <p>{profile.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <DeveloperDetail developer={selectedDeveloper} onBack={onBack} />
      )}
    </div>
  );
};

export default AboutMe;
