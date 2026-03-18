import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <svg 
      className={`logo-svg ${className}`}
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Leaf/Tech Symbol */}
      <path 
        d="M20 4C20 4 12 8 12 16C12 20 14 24 20 28C26 24 28 20 28 16C28 8 20 4 20 4Z" 
        className="logo-leaf logo-primary"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M20 12C20 12 16 14 16 18C16 20 17 22 20 24C23 22 24 20 24 18C24 14 20 12 20 12Z" 
        className="logo-inner logo-secondary"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Circuit/Tech Lines */}
      <circle cx="20" cy="20" r="2" className="logo-dot logo-accent" />
      <line x1="20" y1="28" x2="20" y2="36" className="logo-line logo-accent" strokeWidth="2" strokeLinecap="round"/>
      <line x1="12" y1="24" x2="8" y2="28" className="logo-line logo-accent" strokeWidth="2" strokeLinecap="round"/>
      <line x1="28" y1="24" x2="32" y2="28" className="logo-line logo-accent" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export default Logo;
