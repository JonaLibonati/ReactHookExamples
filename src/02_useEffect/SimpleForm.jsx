import React, { useEffect } from 'react'
import { useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState(
    {
      username: '',
      email: '',
    }
  );

  const {username, email} = formState;

  const onInputChange = ({target})=> {
    const {name, value} = target;

    setFormState(
      {
        ... formState,
        [name] : value,
      }
    );
  }

  useEffect(()=> {
    console.log('useEffect called')
  }, []);

  useEffect(()=> {
    console.log('formState called')
  }, [formState]);

  useEffect(()=> {
    console.log('email called')
  }, [email]);

  return (
    <>
      <h2>simpleForm</h2>
      <input
        type='text'
        className='form-control mb-2'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      {
        username === 'Pepe' && <Message />
      }

      <input
        type='email'
        className='form-control'
        placeholder='email'
        name='email'
        value={email}
        onChange={onInputChange}
      />
    </>
  )
}
