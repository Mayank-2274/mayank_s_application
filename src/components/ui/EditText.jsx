'use client';
import React, { useState } from 'react';

const EditText = ({
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
  disabled = false,
  className = '',
  leftImage = null,
  rightImage = null,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="relative w-full">
      {leftImage && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
          <img 
            src={leftImage.src} 
            alt="" 
            className={`w-[${leftImage.width}px] h-[${leftImage.height}px]`}
          />
        </div>
      )}
      
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        className={`
          w-full
          px-3 py-3
          sm:px-3 sm:py-3
          md:px-3 md:py-3
          ${leftImage ? 'pl-11' : 'pl-3'}
          ${rightImage ? 'pr-11' : 'pr-3'}
          text-sm sm:text-base
          border border-gray-200
          rounded-lg
          bg-white
          text-muted
          placeholder-muted
          focus:outline-none
          focus:ring-2
          focus:ring-accent
          focus:border-transparent
          transition-all
          duration-200
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      />
      
      {rightImage && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <img 
            src={rightImage.src} 
            alt="" 
            className={`w-[${rightImage.width}px] h-[${rightImage.height}px]`}
          />
        </div>
      )}
    </div>
  );
};

export default EditText;