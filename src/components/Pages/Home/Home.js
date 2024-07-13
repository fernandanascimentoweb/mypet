import React from 'react';
import './Home.css';
import NavBar from '../../NavBar/NavBar';
import Header from '../../Header/Header';
import Card from '../../Card/Card';
import { bichos_list } from '../../../assets/assets';
import Footer from '../../Footer/Footer';




function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <h1 className='texto'> 🎥 Galeria de videos - My Pets </h1>
        <hr />
      <section className='cards'>
        { bichos_list.map((bicho) => {
          return <Card id={bicho.id} key={bicho.id} />
        })}
      </section>
      <Footer />
    </>
  )
}

export default Home