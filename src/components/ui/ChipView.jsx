'use client';
import React, { useState } from 'react';

const ChipView = ({
  items = [],
  selectedIndex = 0,
  onSelectionChange,
  className = '',
  ...props
}) => {
  const [selected, setSelected] = useState(selectedIndex);

  const handleChipClick = (index) => {
    setSelected(index);
    if (onSelectionChange) {
      onSelectionChange(index, items[index]);
    }
  };

  return (
    <div 
      className={`flex flex-wrap gap-2 sm:gap-3 md:gap-4 ${className}`}
      {...props}
    >
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => handleChipClick(index)}
          className={`
            px-6 py-3
            sm:px-8 sm:py-3
            md:px-8 md:py-3
            text-sm sm:text-base
            font-normal
            rounded-full
            transition-all
            duration-200
            ease-in-out
            focus:outline-none
            focus:ring-2
            focus:ring-accent
            focus:ring-opacity-50
            ${selected === index 
              ? 'bg-accent text-white' :'border border-neutral text-white hover:bg-accent hover:text-white hover:border-accent'
            }
          `.trim().replace(/\s+/g, ' ')}
        >
          {item.label || item}
        </button>
      ))}
    </div>
  );
};

export default ChipView;