import React from 'react';
import Search from '../Search';
import CardsHome from './CardsHome';
import Footer from './Footer';



function Home() {
  return (
    <>
      <h2>Rappi4</h2>
      <hr />
      <Search />
      <CardsHome />
      <Footer />
    </>
  );
}

export default Home;