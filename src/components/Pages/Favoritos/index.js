import React from 'react';
import './favoritos.css';
import NavBar from '../../NavBar/NavBar';
import VideoList from '../../VideoList/VideoList';
import { useFavoriteContext } from '../../../contexts/Favorites';
import Footer from '../../Footer/Footer';

function Favorites(){

  const { favorite } = useFavoriteContext()

  return (
    <>  
      <NavBar />
      <div className='favoritos'>
        <h2> 💕 Meus favoritos 💕 </h2>
          { <VideoList bichos_list={favorite} emptyHeading="sem favoritos" />}
      </div>
      <Footer />
    </>
  )
}

export default Favorites;