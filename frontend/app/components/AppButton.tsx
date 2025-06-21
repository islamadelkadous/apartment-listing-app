import React from 'react';
import { useRouter } from 'next/navigation';

interface AppButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const AppButton: React.FC<AppButtonProps> = ({ children, to, onClick, className = '', type = 'button' }) => {
  const router = useRouter();
  const handleClick = () => {
    if (onClick) onClick();
    else if (to) router.push(to);
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`px-4 py-2 bg-gradient-to-r from-[#26A69A] to-[#42A5F5] text-white rounded-lg shadow hover:from-[#42A5F5] hover:to-[#26A69A] transition ${className}`}
    >
      {children}
    </button>
  );
};

export default AppButton;
