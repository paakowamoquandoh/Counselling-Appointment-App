import React from 'react';
import SmallNav from '../components/SmallNav';
import MainNav from '../components/MainNav';
import Page from '../components/Page';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div>
      <SmallNav />
      <MainNav />
      <Page />
      <Footer />
    </div>
  );
};

export default Home;
