
import React from 'react';
import { useRef } from 'react';

export const FocusScreen = () => {

  const inputRef = useRef()

  const onFocusClick = ()=> {
    console.log(inputRef);
    inputRef.current.focus()
  }

  return (
    <>
      <h2>FocusScreen</h2>

      <input
        ref={inputRef}
        type='text'
        placeholder='Your name'
        className='form-control mb-2'
      />

      <button
        className='btn btn-dark'
        onClick={onFocusClick}
      >
        Set Focus
      </button>
    </>
  )
}

