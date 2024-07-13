import React from 'react';
import './VideoList.css';
import Card from '../Card/Card';


function VideoList({ bichos_list, emptyHeading }) {

  const count = bichos_list.length
  let heading = emptyHeading

    if(count > 0) {
      const noun = count > 1 ? 'videos' : 'video';
      heading = `${count} ${noun}`
    }

  return (
    <>
        <h2> { heading }</h2>
        <section className='videos'>
            { bichos_list.map((bicho) => <Card id={bicho.id} key={bicho.id} /> )}
        </section>
    </>

  )
}

export default VideoList