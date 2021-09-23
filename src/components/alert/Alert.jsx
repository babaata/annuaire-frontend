import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Loading from './Loading';

const Alert = () => {

  const {notify} = useSelector(state => state)


  return (
    <div>                                                     
      {notify.loading &&  ".." }
    </div> 
  );
}

export default Alert;
