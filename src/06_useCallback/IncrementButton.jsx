import React, { memo } from 'react'

export const IncrementButton = memo(({increment}) => {

  console.log('<Increment />')
  return (
    <button
      className='btn btn-dark'
      onClick={()=> {increment(5)}}
    >
      Increment
    </button>
  )
});
