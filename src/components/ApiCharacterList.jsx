import React, { useEffect, useState } from 'react';

import CharacterCard from './CharacterCard';

function ApiCharacterList() {
    const [characters, setCharacters] = useState([]);

    // useEffect para cargar los personajes desde la API cuando el componente se monta
    useEffect(() => {
        const fetchCharactersFromAPI = async () => {
            try {
                const response = await fetch('https://ghibliapi.vercel.app/people'); // se hace la petición a la API con fetch

                const data = await response.json();

                // Formateamos los datos recibidos para que se ajusten anuestro componente
                const formattedCharacters = data.map(character => ({
                    name: character.name,
                    image: 'https://via.placeholder.com/200',
                    description: character.gender || 'Sin descripción'
                }));

                setCharacters(formattedCharacters); // Se actualiza el estado con los datos de la API

            } catch (error) {
                console.error('Error al obtener los personajes de la API: ', error);
            }
        };
        fetchCharactersFromAPI(); // Se llama a la función para obtener los datos
    }, []);
    return (
        <div className="characters-grid">
            {characters.map((character) => (
                <CharacterCard
                    key={character.name}
                    name={character.name}
                    image={character.image}
                    description={character.description}
                />
            ))}
        </div>
    );
}

export default ApiCharacterList;
