import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => (
  <h1
    className={`text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#26A69A] to-[#42A5F5] text-center drop-shadow-lg tracking-tight w-full ${className}`}
    style={{ lineHeight: '1.2' }}
  >
    {children}
  </h1>
);

export default SectionTitle;
