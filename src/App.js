import './App.css';
import { useState } from 'react';
import MovieList from './components/movielist/MovieList';
import Filter from './components/filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import AddModal from './components/addmodal/AddModal';
import Description from './components/Description/Description';
import { Routes, Route } from 'react-router-dom';



function App() {


  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: 'One Piece',
      description: 'One Piece raconte les aventures d une bande de pirates, menée par le capitaine Monkey D.Luffy(qui a pour ambition de devenir le roi des pirates) et lancée à la recherche du trésor, nommé One Piece, du légendaire roi des pirates Gold Roger, mort sans avoir révélé emplacement de son butin.',
      rate: '5',
      img: 'https://m.media-amazon.com/images/I/71T3FJ7iJpL._AC_UF894,1000_QL80_.jpg',
      trailer: "https://www.youtube.com/embed/S8_YwFLCh4U"
    },
    {
      id: uuidv4(),
      title: 'Naruto',
      description: 'Dans lunivers de la série, Naruto est un jeune ninja du village de Konoha. Hôte du démon renard à neuf queues, une créature qui a attaqué le village par le passé, il est rejeté par les autres villageois. Son ambition est de devenir Hokage, le chef du village, afin de gagner le respect des habitants.',
      rate: '5',
      img: 'https://m.media-amazon.com/images/I/81qb4I6rbsL.jpg',
      trailer:"https://www.youtube.com/embed/YKSNBIlM_bY"
    },
    {
      id: uuidv4(),
      title: 'The Game',
      description: 'Synopsis. À San Francisco, Nicholas Van Orton (Michael Douglas) va fêter ses quarante-huit ans. Quarante-huit ans, cest aussi lâge auquel son père a mis fin à ses jours. Il semblerait que rien ne puisse perturber la vie organisée de cet homme daffaires richissime, avide de pouvoir, froid, distant et triste.',
      rate: '4',
      img: 'https://m.media-amazon.com/images/I/41yGRspJ1aL._AC_UF894,1000_QL80_.jpg',
      trailer:"https://www.youtube.com/embed/nsKdR05ZsGE"

    },
    {
      id: uuidv4(),
      title: 'Iron Man',
      description: 'Iron Man de 2008 raconte lhistoire de Tony Stark, un industriel milliardaire et inventeur de génie qui est kidnappé et contraint de construire une arme dévastatrice. Au lieu de cela, en utilisant son intelligence et son ingéniosité, Tony construit une armure de haute technologie et échappe à la captivité.',
      rate: '1',
      img: 'https://m.media-amazon.com/images/I/41W6U03Kr4L._AC_UF894,1000_QL80_.jpg',
      trailer:"https://www.youtube.com/embed/8ugaeA-nMTc"
    },
    {
      id: uuidv4(),
      title: 'Fast and Ferious',
      description: 'Synopsis. La nuit tombée, Dominic Toretto règne sur les rues de Los Angeles à la tête dune équipe de fidèles qui partagent son goût du risque, sa passion de la vitesse et son culte des voitures de sport lancées à plus de 250 km/h dans des rodéos urbains dune rare violence.',
      rate: '3',
      img: 'https://m.media-amazon.com/images/I/61qTEPIUzML._AC_UF894,1000_QL80_.jpg',
      trailer:"https://www.youtube.com/embed/2TAOizOnNPo"
    },
    {
      id: uuidv4(),
      title: 'Matrix',
      description: 'Il dépeint un futur dystopique dans lequel la réalité perçue par la plupart des humains est une simulation virtuelle en se connectant à la « Matrice », créée par des machines douées dintelligence, afin dasservir les êtres humains, à leur insu, et de se servir de la chaleur et de lactivité électrique de leur corps ...',
      rate: '2',
      img: 'https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_UF894,1000_QL80_.jpg',
      trailer:"https://www.youtube.com/embed/vKQi3bBA1y8"
    }
  ])
  const [Search, setSearch] = useState('');
  const [rating, setRating] = useState(1);
  const [modal, setModal] = useState(false)



  const toggleSearch = (text) => {
    setSearch(text)
  }
  const rateMov = (num) => {
    setRating(num)
  }
  const toggleModal = () => {
    setModal(!modal)
  }


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div>
            <button onClick={toggleModal} style={{ marginTop: '50px' }} className="btn">addMovie</button>
            <AddModal modal={modal} setMovies={setMovies} movies={movies} toggleModal={toggleModal}></AddModal>
            <Filter toggleSearch={toggleSearch} rateMov={rateMov}></Filter>
            <MovieList movies={movies.filter(e => e.title.toLowerCase().includes(Search.toLowerCase().trim()) && e.rate >= rating)}></MovieList>
          </div>} />
        <Route path='/Description/:id' element={<Description movies={movies}></Description>} />
      </Routes>
    </div>

  );
}

export default App;
