import React, { useState } from 'react';
import c from 'classnames';
import { Element } from './components/element';

import './style.css';
import 'font-awesome/css/font-awesome.min.css';

export function App() {
  const [selectedType, setSelectedType] = useState(null);

  const cleanSelected = () => {
    setSelectedType(null);
  };

  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <div className="element-grid grid-container">
        {selectedType ? (
          <Element type={selectedType} onClick={cleanSelected} />
        ) : (
          <div
            className={c(
              'grid grid-cols-2 grid-rows-2 gap-4',
              selectedType ? 'grid-hidden' : ''
            )}
          >
            <Element type="fire" onClick={setSelectedType} />
            <Element type="water" onClick={setSelectedType} />
            <Element type="electric" onClick={setSelectedType} />
            <Element type="grass" onClick={setSelectedType} />
          </div>
        )}
      </div>
    </main>
  );
}
