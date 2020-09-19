import React from 'react';
import './homepage.styles.css';

const HomePage = () => (
  <div>
    <div>
      <h1 className='header'>Magic The Gathering Search Bar</h1>
    </div>

    <div className='row'>
      <div className='column'>
        <div className='left'>
          <div className='inner'>
            <span className='name'>Name: </span>
            <span className='response'>NAME HERE </span>
          </div>
          <div className='inner'>
            <span className='name'>CMC: </span>
            <span className='response'>CMC Here</span>
          </div>
          <div className='inner'>
            <span className='name'>Types: </span>
            <span className='response'>Types HERE </span>
          </div>
          <div className='inner'>
            <span className='name'>Abilities/Affects: </span>
            <span className='response'>Abilities here </span>
          </div>

          <div className='inner'>
            <span className='name'>Power/Toughness: </span>
            <span className='response'>NAME HERE </span>
          </div>
          <div className='inner'>
            <span className='name'>Sets Appeared: </span>
            <span className='response'>Sets Appear HERE </span>
          </div>
          <div className='inner'>
            <span className='name'>Legal In: </span>
            <span className='response'>Legality Here </span>
          </div>
        </div>
      </div>
      <div className='column'>
        <span>Image:</span>
      </div>
    </div>
  </div>
);

export default HomePage;
