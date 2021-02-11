import React from 'react';
import classNames from 'classnames';
const loadingImg =
  'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

import classes from './Loading.scss';

const Loading = () => {
  const loadingClass = classNames(
    classes['spinner']
  )
  return (
    <div className={loadingClass}>
      <img src={loadingImg} alt="Loading..." />
    </div>
  )
}

export default Loading;
