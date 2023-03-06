import React from 'react';
import { useEffect } from 'react';

export const Message = () => {

	useEffect(() => {
		console.log('message mounted');
		return () => {
			console.log('message unmounted');
		}
	}, [])

  return (
    <h4>User already exists</h4>
  )
}
