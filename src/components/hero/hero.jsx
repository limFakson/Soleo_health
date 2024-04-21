import React from 'react';
import "./hero.css";

function hero() {
  return (
    <header className='w-full'>
        <div className="nav h-[5px]"></div>
        <div className="hero">
            <h1 className="hero-heading">
                Welcome to Soleo Health
            </h1>
        </div>
    </header>
  )
}

export default hero
