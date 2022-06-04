import React from 'react';
import './Styles/Error.css';
import Snorlax from '../Assets/Images/404-snorlax.png';
import BackButton from '../Components/BackButton';

function Error() {
  return (
    <>
      <div className="error-body">
        <div className="error-content">
          <img src={Snorlax} alt="snorlax" />
          <h1>Error 404</h1>
          <h3>This page does not exist!</h3>
          <BackButton />
        </div>
      </div>
    </>
  );
}

export default Error;
