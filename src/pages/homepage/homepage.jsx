import React from 'react';
import './homepage.styles.css';

const HomePage = ({ name, cmc, types, ability, pt, sets, legal, img }) => (
  <div>
    <div className='row'>
      <div className='column'>
        <div className='left'>
          <div className='inner'>
            <span className='name'>Name: </span>
            <span className='response'>{name}</span>
          </div>
          <div className='inner'>
            <span className='name'>CMC: </span>
            <span className='response'>{cmc}</span>
          </div>
          <div className='inner'>
            <span className='name'>Types: </span>
            <span className='response'>{types}</span>
          </div>
          <div className='inner'>
            <span className='name'>Abilities/Affects: </span>
            <span className='response'>{ability}</span>
          </div>

          <div className='inner'>
            <span className='name'>Power/Toughness: </span>
            <span className='response'>{pt}</span>
          </div>
          <div className='inner'>
            <span className='name'>Sets Appeared: </span>
            <span className='response'>{sets}</span>
          </div>
          <div className='inner'>
            <span className='name'>Legal In: </span>
            <span className='response'>{legal}</span>
          </div>
        </div>
      </div>
      <div className='column'>
        <div>Image: </div>
        <div>
          {' '}
          <img src={img} alt=''></img>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
