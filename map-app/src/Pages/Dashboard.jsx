import React from 'react';
import { Link } from 'react-router-dom';
import DataMap from '../Components/DashboardPageComponents/DataMap';

const Dashboard = () => {
  return (
    // className='bg-[#132442]'
    <section className='bg-[#132442]'>
      {/* <div className='text-center'>
    <div className='text-center text-blue-800 font-700 text-[24px]'>Dashboard</div>
    <Link to='/'>Go to Home</Link>
    </div> */}
    {/* Map */}
    <div className=''>
      <DataMap/>
    </div>
    </section>
  )
}

export default Dashboard