import React from 'react'
import './PageNotFound.css';
import not_found from './logo_404.png';
import NavBar from '../../NavBar/NavBar';


const PageNotFound = () => {
  return (
    <>
        <NavBar />
        <div className="imagem">
            <h2>Ops! Pagina não localizada .</h2>
            <img src={not_found} alt='Pagina não localizada'/>
        </div>
    </>
  )
}

export default PageNotFound