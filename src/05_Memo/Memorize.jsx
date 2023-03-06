import React, { useState } from 'react';
import { Small } from './Small';
import { useCounter } from '../hooks/useCounter';

export const Memorize = () => {

  const {counter, sum} = useCounter(0);

  const [show, setShow] = useState(true)

  return (
    <>
      <h2>memorize</h2>

      <h3>counter: <Small value={counter} /></h3>

      <button
        className='btn btn-dark'
        onClick={()=> {sum(1)}}
      >
          +1
      </button>

      <button
        className='btn btn-dark ms-2'
        onClick={()=> {setShow(!show)}}
      >
          show/hide {`${show}`}
      </button>
    </>
  )
}
