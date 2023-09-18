import React from 'react';
import c from 'classnames';

import './element.css';
import 'font-awesome/css/font-awesome.min.css';

const TYPE_ASSETS = {
  fire: {
    icon: 'fa-fire',
    color: 'bg-red',
  },
  water: {
    icon: 'fa-tint',
    color: 'bg-blue',
  },
  electric: {
    icon: 'fa-bolt',
    color: 'bg-yellow',
  },
  grass: {
    icon: 'fa-leaf',
    color: 'bg-green',
  },
};

export function Element({ type, isSelected, onClick }) {
  const assets = TYPE_ASSETS[type];
  return (
    <div
      className={c(
        'p-12 rounded-full text-white cursor-pointer hover:opacity-90',
        isSelected ? `${assets.color}-500` : `${assets.color}-400`
      )}
      onClick={() => onClick(type)}
    >
      <i className={c('fa fa-lg', 'icon-large', assets.icon)}></i>
    </div>
  );
}
