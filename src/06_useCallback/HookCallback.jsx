import React, { useCallback, useState } from 'react';
import { IncrementButton } from './IncrementButton';

export const HookCallback = () => {

  /*
  It is not posible with this way.

  const {counter, sum} = useCounter(0);

  const increment = useCallback(
    (value) => {
      sum(value);
    },
    [],
  ) */

  const [counter, setCounter] = useState(0);

  const increment = useCallback(
    (value) => {
      setCounter((counter)=> counter + value);
    },
    [],
  );

  return (
    <>
      <h2>HookCallback</h2>
      <h3>Counter: {counter}</h3>
      <IncrementButton increment={increment}/>
    </>
  )
}
