import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="container">
        <h1 className="not-found-code">404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
