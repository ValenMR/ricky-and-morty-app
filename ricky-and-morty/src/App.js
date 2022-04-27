import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar' //se importa el componente de navbar creado en otro archivo js para que siga funcionando igual
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState([]);
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty" />
      <div className="container">
        <Characters characters = {characters} />
      </div>
    </>


  );
}

export default App;
