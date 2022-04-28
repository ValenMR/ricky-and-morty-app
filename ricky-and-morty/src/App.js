import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar'; //se importa el componente de navbar creado en otro archivo js para que siga funcionando igual
import Characters from './components/Characters';
import Pagination from './components/Pagination';

function App() {
  const [characters, setCharacters] = useState([]); //el useState nos da un estado de la app, el setcharacters es la funcion que modifica ese estado
  const [info, setInfo] = useState([]);  //almacenar el objeto de info 
  const [search, setSearch] = useState("")

  const initialUrl = "https://rickandmortyapi.com/api/character";


  const fetchCharacters = (url) => { //llamada de red
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results); //se le da el array con los personajes o sea results. Se almacena el array de personajes
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }
  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])
  const handleChange = e => {
    setSearch(e.target.value);
    filtrar(e.target.value)
  }
  const filtrar = (searchTerm) => {
    var searchResult = characters.filter(function (element) {
      if (element.species.toString().toLowerCase().includes(searchTerm.toLowerCase())
        || element.location.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
        || element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        return element;
      }
    });
    setInfo(searchResult);
  }
  return (
    <>
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={search}
          placeholder="Búsqueda por especie o planeta"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      
      <Navbar brand="Rick and Morty" />
      <div className="container">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>


  );
}

export default App;
