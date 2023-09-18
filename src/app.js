import React from 'react';
import React, { useState } from 'react';
import c from 'classnames';
import { Element } from './components/element';

import './style.css';
import 'font-awesome/css/font-awesome.min.css';

export function App() {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const cleanSelected = () => {
    setSelectedType(null);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="grid-container">
        {selectedType ? (
          <Element
            type={selectedType}
            isSelected={true}
            onClick={cleanSelected}
          />
        ) : (
          <div
            className={c(
              'grid grid-cols-2 grid-rows-2 gap-4',
              selectedType ? 'grid-hidden' : ''
            )}
          >
            <Element
              type="fire"
              isSelected={selectedType === 'fire'}
              onClick={handleTypeClick}
            />
            <Element
              type="water"
              isSelected={selectedType === 'water'}
              onClick={handleTypeClick}
            />
            <Element
              type="electric"
              isSelected={selectedType === 'electric'}
              onClick={handleTypeClick}
            />
            <Element
              type="grass"
              isSelected={selectedType === 'grass'}
              onClick={handleTypeClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}
