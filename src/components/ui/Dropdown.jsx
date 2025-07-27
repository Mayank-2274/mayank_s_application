'use client';
import React, { useState } from 'react';

const Dropdown = ({
  placeholder = 'Select an option',
  options = [],
  value = '',
  onChange,
  disabled = false,
  className = '',
  rightImage = null,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const handleSelect = (option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={`
          w-full
          px-3 py-3
          sm:px-3 sm:py-3
          md:px-3 md:py-3
          ${rightImage ? 'pr-11' : 'pr-3'}
          text-sm sm:text-base
          text-left
          border border-gray-200
          rounded-lg
          bg-white
          text-muted
          focus:outline-none
          focus:ring-2
          focus:ring-accent
          focus:border-transparent
          transition-all
          duration-200
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-gray-300'}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {selectedValue || placeholder}
      </button>

      {rightImage && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <img 
            src={rightImage.src} 
            alt="" 
            className={`w-[${rightImage.width}px] h-[${rightImage.height}px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      )}

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.length > 0 ? (
            options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(option)}
                className="w-full px-3 py-2 text-left text-sm sm:text-base text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none first:rounded-t-lg last:rounded-b-lg"
              >
                {option.label}
              </button>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">No options available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;