import React from 'react';
import c from 'classnames';
import 'font-awesome/css/font-awesome.min.css';

const TYPE_ASSETS = {
  fire: {
    icon: 'fa-fire',
    color: 'bg-red-500',
  },
  water: {
    icon: 'fa-tint',
    color: 'bg-blue-500',
  },
  electric: {
    icon: 'fa-bolt',
    color: 'bg-yellow-500',
  },
  grass: {
    icon: 'fa-leaf',
    color: 'bg-green-500',
  },
};

export function Element({ type, onClick }) {
  const assets = TYPE_ASSETS[type];
  return (
    <div
      className={c(
        'p-12 rounded-full text-white cursor-pointer hover:opacity-90',
        `${assets.color}`,
        'flex items-center justify-center'
      )}
      onClick={() => onClick(type)}
    >
      <i className={c('fa fa-lg', 'text-4xl', assets.icon)}></i>
    </div>
  );
}
