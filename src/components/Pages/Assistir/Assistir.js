import React from 'react';
import './Assistir.css';
import NavBar from '../../NavBar/NavBar';
import { useParams } from 'react-router-dom';
import { bichos_list } from '../../../assets/assets';
import PageNotFound from '../../Pages/PageNotFound/PageNotFound';



const Assistir = () => {

  const params = useParams()
  const bicho = bichos_list.find((bicho) => { return bicho.id === params.id })
  
  if (!bicho) { return <PageNotFound />}

  return (
    <>
    <NavBar />
    <section className="video" >
        <iframe 
          width="954" height="580" 
          src={`https://www.youtube.com/embed/${bicho.id}`} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </section>
    </>
  )
}

export default Assistir