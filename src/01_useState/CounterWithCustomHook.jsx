import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

  const { counter, sum, reset } = useCounter(0);

  return (
    <>
      <h2>CounterWithCustomHook</h2>
      <h2>{counter}</h2>

      <button className='btn btn-dark me-2' onClick={()=>{sum(-1)}}> -1 </button>
      <button className='btn btn-dark' onClick={()=>{reset()}}> Reset </button>
      <button className='btn btn-dark ms-2' onClick={()=>sum(1)}> +1 </button>
    </>
  )
}
