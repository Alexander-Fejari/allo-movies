import React from 'react';

const loader = () => {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className='d-flex flex-row justify-content-center align-items-center w-100'
    >
      <img
        alt='loading gif'
        src='https://creanimaxion.com/wp-content/uploads/2018/06/freezB.gif'
      />
    </div>
  );
};
export default loader;
