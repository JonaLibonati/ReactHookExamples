import React, { useState, useMemo } from 'react';
import { Small } from './Small';
import { useCounter } from '../hooks/useCounter';

const heavy = (iterationNumber = 100)=> {
    for (let i=0; i < iterationNumber; i++) {
        console.log('heavy');
    }

    return `${iterationNumber} iteration run`
}

export const HookUseMemo = () => {

  const {counter, sum} = useCounter(0);
  const [show, setShow] = useState(true);

  const memorize = useMemo(() => heavy(counter), [counter])
  //const memorize = heavy(counter);

  return (
    <>
      <h2>useMemo</h2>

      <h3>counter: <Small value={counter} /></h3>

      <h4>{memorize}</h4>

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