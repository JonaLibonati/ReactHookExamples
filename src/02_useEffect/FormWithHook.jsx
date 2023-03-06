import React from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithHook = () => {

  const {formState, onInputChangeWithHook} = useForm(
    {
      username: '',
      email: '',
      password: '',
    }
  );

  const { username, email, password } = formState;

  return (
    <>
      <h2>FormWhitHook</h2>
      <input
        type='text'
        className='form-control mb-2'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChangeWithHook}
      />

      <input
        type='email'
        className='form-control mb-2'
        placeholder='email'
        name='email'
        value={email}
        onChange={onInputChangeWithHook}
      />

      <input
        type='password'
        className='form-control'
        placeholder='password'
        name='password'
        value={password}
        onChange={onInputChangeWithHook}
      />
    </>
  )
}
