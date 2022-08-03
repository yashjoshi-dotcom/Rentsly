import React from 'react';

// import components
import HouseList from '../components/listing/HouseList';
import Banner from '../components/listing/Banner';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
