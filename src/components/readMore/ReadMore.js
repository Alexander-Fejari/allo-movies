import React, { useState } from 'react';
import Style from './ReadMore.module.scss';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <p className='isActive'>
        {isReadMore ? text.slice(0, 150) : text}{' '}
        <span onClick={toggleReadMore}>
          {isReadMore ? '... Read more' : ' Show less'}
        </span>
      </p>
    </>
  );
};

const Content = props => {
  return (
    <div className={Style['container']}>
      <ReadMore>{props.description}</ReadMore>
    </div>
  );
};

export default Content;
