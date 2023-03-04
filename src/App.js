import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MovieList from './components/movielist/MovieList';

import Filter from './components/filter/Filter';

import { v4 as uuidv4 } from 'uuid';
import AddModal from './components/addmodal/AddModal';



function App() {


  const [movies,setMovies]=useState([
    { id: uuidv4(),
      title:'onePiece',
      description:'desc',
      rate:'5',
      img:'https://m.media-amazon.com/images/I/71T3FJ7iJpL._AC_UF894,1000_QL80_.jpg'
},
{ id: uuidv4(),
      title:'naruto',
      description:'desc',
      rate:'5',
      img:'https://m.media-amazon.com/images/I/81qb4I6rbsL.jpg'
},
{  id: uuidv4(),
      title:'The Game',
      description:'desc',
      rate:'4',
      img:'https://m.media-amazon.com/images/I/41yGRspJ1aL._AC_UF894,1000_QL80_.jpg'

},
{ id: uuidv4(),
      title:'Iron Man',
      description:'desc',
      rate:'1',
      img:'https://m.media-amazon.com/images/I/41W6U03Kr4L._AC_UF894,1000_QL80_.jpg',
},
{ id: uuidv4(),
      title:'Fast and Ferious',
      description:'desc',
      rate:'3',
      img:'https://m.media-amazon.com/images/I/61qTEPIUzML._AC_UF894,1000_QL80_.jpg'
},
{ id: uuidv4(),
      title:'Matrix',
      description:'desc',
      rate:'2',
      img:'https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_UF894,1000_QL80_.jpg'
}
])
const [Search,setSearch]=useState('');
const [rating,setRating]=useState(1);
const [modal,setModal]=useState(false)



const toggleSearch=(text)=>{
  setSearch(text)
}
const rateMov =(num)=>{
  setRating(num)
}
const toggleModal=()=>{
  setModal(!modal)
}


  return (
    <div className="App">
    <button onClick={toggleModal} style={{marginTop:'50px'}} className="btn">addMovie</button> 
     <AddModal modal={modal} setMovies={setMovies} movies={movies} toggleModal={toggleModal}></AddModal>
    <Filter toggleSearch={toggleSearch} rateMov={rateMov}></Filter>
     <MovieList movies={movies.filter(e=>e.title.toLowerCase().includes(Search.toLowerCase().trim())&&e.rate>=rating)}></MovieList>
    </div>
  );
}

export default App;
