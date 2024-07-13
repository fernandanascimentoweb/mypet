import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';
import iconFavorite from './favorite.png';
import iconUnfavorite from './unfavorite.png';
import { useFavoriteContext } from '../../contexts/Favorites';


function Card ({id}) {

  const { favorite, addFavorite } = useFavoriteContext()
  const isFavorite = favorite.some((fav) => fav.id === id)
  const icone = isFavorite ? iconUnfavorite : iconFavorite

  return (
    <>
        <section className='card'>
          <Link to={`/assistir/${id}`} >                     
            <img src={`https:img.youtube.com/vi/${id}/mqdefault.jpg`} alt="capa" className='capa'/>
           </Link>
           <figure className='icon'>
             <img src={icone} alt='Icone' onClick={()=> addFavorite({id})} />
            </figure>
        </section>
    </>
  )
}

export default Card