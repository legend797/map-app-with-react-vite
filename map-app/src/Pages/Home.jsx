import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='text-center text-blue-800 font-700 text-[24px]'>
    Hello Vite
  </div>
  <Link to="/dashboard">Go to Dashboard</Link>
  </div>
  )
}

export default Home