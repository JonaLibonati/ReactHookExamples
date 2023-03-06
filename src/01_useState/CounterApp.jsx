import React from 'react';
import { useState } from 'react';

export const CounterApp = () => {

  const [counter, setCounter] = useState({
    counter1: 0,
    counter2: 10,
    counter3: 20,
  });

  const {counter1, counter2, counter3} = counter;

  /* const [control, setControl] = useState(0);

  const handleClik = ()=> {
      let i = control + 1;
      setControl(i);
      if (control <= 10) {
          setCounter({...counter, counter1: control});
      }
      else if (control <= 20) {
          setCounter({...counter, counter2: control});
      }
      else {
          setCounter({...counter, counter3: control});
      }
  } */

  const handleClik = ()=> {

    if ( counter3 >= 30 ) return;

    let counterName = 'counter1';

    if (counter1 >= 10) counterName = 'counter2';
    if (counter2 >= 20) counterName = 'counter3';

    setCounter(
      {
        ...counter,
        [counterName]: counter[counterName] + 1,
      }
    );
  }

  return (
    <>
      <h2>CounterApp</h2>
      <h3>counter: {counter1}</h3>
      <h3>counter: {counter2}</h3>
      <h3>counter: {counter3}</h3>
      <button className='btn btn-dark' onClick={()=>{handleClik()}}>+1</button>
    </>
  )
}
