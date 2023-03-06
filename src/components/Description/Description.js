import React from 'react'
import './Description.css'
import { Link, useParams } from 'react-router-dom'

const Description = ({ movies }) => {
    const {id}=useParams();
    const mov=movies.find((e) => e.id === id)
     return (
        <div className='Disc'>
            <Link to='/'> <button className='button'>Back Home</button> </Link>
            <br/><br/>
            
                 <div className='Text'>
                    <h1>{mov.title}</h1>
                    <br/><br/>
                    <p className='descriptionn'>{mov.description}</p>
                    <br/><br/>
                    <iframe width="560" height="315" src={mov.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 </div>
                
        
          
        </div>
    )
}

export default Description