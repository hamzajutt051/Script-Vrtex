import React from 'react';
import Logo from '../assets/reallogo.png';
import './routes.css'

export default function Loading() {
  return (
    <div className="loader">
      <div>
        <img src={Logo} style={{ width: 150 }} alt="logo" />
        <p>full stack websites</p>
      </div>
    </div>
  );
}
