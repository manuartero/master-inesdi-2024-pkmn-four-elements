import React, { useState } from 'react';
import c from 'classnames';

import './style.css';
import 'font-awesome/css/font-awesome.min.css';

export function App() {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div
          className={c(
            'p-8 rounded-full text-white cursor-pointer hover:opacity-80',
            selectedType === 'fire' ? 'bg-red-500' : 'bg-gray-300'
          )}
          onClick={() => handleTypeClick('fire')}
        >
          <i className="fa fa-fire fa-lg"></i>
        </div>
        <div
          className={c(
            'p-8 rounded-full text-white cursor-pointer hover:opacity-80',
            selectedType === 'water' ? 'bg-blue-500' : 'bg-gray-300'
          )}
          onClick={() => handleTypeClick('water')}
        >
          <i className="fa fa-tint fa-lg"></i>
        </div>
        <div
          className={c(
            'p-8 rounded-full text-white cursor-pointer hover:opacity-80',
            selectedType === 'electric' ? 'bg-blue-500' : 'bg-gray-300'
          )}
          onClick={() => handleTypeClick('electric')}
        >
          <i className="fa fa-bolt fa-lg"></i>
        </div>
        <div
          className={c(
            'p-8 rounded-full text-white cursor-pointer hover:opacity-80',
            selectedType === 'grass' ? 'bg-green-500' : 'bg-gray-300'
          )}
          onClick={() => handleTypeClick('grass')}
        >
          <i className="fa fa-leaf fa-lg"></i>
        </div>
      </div>
    </div>
  );
}
