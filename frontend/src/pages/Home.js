import React from 'react';
import '../styles/Home.css';
import Banner from '../components/Banner';
import CardTiles from '../components/CardTiles';
import Experiences from '../components/Experiences';
import GiftCard from '../components/GiftCard';
import Inspiration from '../components/Inspiration';
import Host from '../components/Host';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Banner />
      <CardTiles />
      <Experiences />
      <GiftCard />
      <Inspiration />
      <Host />
      <Footer />
    </div>
  )
}

export default Home;