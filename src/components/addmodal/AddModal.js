import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './AddModal.css'


const AddModal = ({modal,setMovies,movies,toggleModal}) => {

  
  const add=()=> {setMovies([...movies,
    { id:uuidv4(), 
      title:title__ref.current.value,
      description:description_ref.current.value,
      rate:rating__ref.current.value,
      img:link__ref.current.value,
    }])};

  const title__ref=useRef()
  const description_ref=useRef()
  const link__ref=useRef()
  const rating__ref=useRef()
  const type__ref=useRef()

  console.log(movies);

  return (

    <div>
    {modal? (
            <div className="modal">
            <div className='wrapper'>
                    <button className='Close_btn' onClick={toggleModal}>close</button>
                    <h3>title</h3>
                    <input type="text" className="modal__input" placeholder='Enter Title'ref={title__ref}/>
                    <h3>description</h3>
                    <input type="text" className="modal__input" placeholder='Enter description' ref={description_ref}/>
                    <h3>rate</h3>
                    <input type="text" className="modal__input" placeholder='Enter rate'ref={rating__ref}/>
                    <h3>img</h3>
                    <input type="text" className="modal__input" placeholder='Enter poster source'ref={link__ref}/>
                    <button onClick={add} className='add_btn'>Add</button>
            </div>
        </div>
        ):null}
    </div>
   
  )
}

export default AddModal