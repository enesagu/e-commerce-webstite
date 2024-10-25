import React from 'react';
import '../css/PageNotFound.css'; // CSS dosyasını import edin

function PageNotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-description">
          Oops! The page you're looking for does not exist.
        </p>
        <a href="/" className="not-found-button">
          Go Back Home
        </a>
      </div>
      <div className="not-found-animation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default PageNotFound;
