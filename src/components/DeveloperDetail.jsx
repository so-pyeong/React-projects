import React from 'react';
import "../styles/DeveloperDetail.css";

const DeveloperDetail = ({ developer, onBack }) => {
  return (
    <div className="developer-detail">
      <button className="back-button" onClick={onBack}>뒤로가기</button>
      <img src={developer.imgSrc} alt={developer.name} className="developer-image" />
      <h2>{developer.name}</h2>
      <p>{developer.description}</p>

      {developer.techStack && (
        <div className="tech-stack">
          <h3>기술 스택</h3>
          <ul>
            {developer.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {developer.email && (
        <div className="contact">
          <h3>연락처</h3>
          <p>이메일: {developer.email}</p>
          {developer.github && (
            <p>
              GitHub: <a href={developer.github} target="_blank" rel="noopener noreferrer">{developer.github}</a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DeveloperDetail;
