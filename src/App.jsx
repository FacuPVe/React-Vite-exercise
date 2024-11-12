import React, { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard.jsx';
import AddCharacterForm from './components/AddCharacterForm.jsx';
import charactersData from './data/characters.json'; 
import { motion } from "framer-motion";
function App() {
  const characterImages = {
    "Haku": "https://i.pinimg.com/1200x/fd/73/7d/fd737db17fd996e1778dfeec48f8959e.jpg",
    "Pazu": "https://i.pinimg.com/originals/d4/56/71/d45671c6508b00aa633a85d3a9a83c61.jpg",
    "Lusheeta Toel Ul Laputa": "https://i.pinimg.com/736x/44/4d/d8/444dd8b9db27b7023e574a2b8b215bcd.jpg",
    "Captain Dola": "https://i.pinimg.com/474x/8c/83/78/8c837826f26057ab9e6b07dde4e2b6b2.jpg",
    "Romska Palo Ul Laputa": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
    "Uncle Pom": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
    "General Mouro": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
    "Duffi": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
    "Louis": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
    "Charles": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
    "Henri": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
    "Motro": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
    "Okami": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
    "Ashitaka": "https://static.wikia.nocookie.net/studio-ghibli/images/4/49/Ashitaka.jpg",
    "San": "https://i.pinimg.com/474x/e5/f7/e2/e5f7e241e46c0ab42693d6999e4f35b9.jpg",
    "Eboshi": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nqVBoqVv8pyEsONQf_Pa4DEOvjrQ0l85bJKJ67hPwpCKfwr8UunbaarP7kH0GthqLjs&usqp=CAU",
    "Jigo": "https://static.wikia.nocookie.net/studio-ghibli/images/7/72/Jigo.jpg",
    "Kohroku": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e4/Toki.png",
    "Gonza": "https://static.wikia.nocookie.net/studio-ghibli/images/4/42/Gonza_%282%29.jpg",
    "Hii-sama": "https://static.wikia.nocookie.net/studio-ghibli/images/8/83/Hii-sama.jpg",
    "Yakul": "https://i.pinimg.com/474x/7e/d9/c5/7ed9c55e60cc08f7fac211143b5e5811.jpg",
    "Shishigami": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b7/Forest_Spirit.jpg",
    "Moro": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5e/Moro.png",
    "Jiji": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcP58-SxLowKnns2pG-KHRniyUWM1Edl9xosXHoH11_xchwnOJH0UCOt5WzQnifYTl8NI&usqp=CAU",
    "Satsuki Kusakabe": "https://i.pinimg.com/564x/91/91/25/91912524e5dfaba5c9305169b49ae07f.jpg",
    "Mei Kusakabe": "https://static.wikia.nocookie.net/studio-ghibli/images/0/01/Mei_Kusakabe.jpg",
    "Tatsuo Kusakabe": "https://i.pinimg.com/736x/2a/fc/82/2afc82941294332651412f51d007026a.jpg",
    "Yasuko Kusakabe": "https://i.pinimg.com/736x/20/ea/f7/20eaf7869d37be4745f70a5bc3386c3b.jpg",
    "Granny": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Granny.png",
    "Kanta Ōgaki": "https://i.pinimg.com/736x/41/30/37/41303752209b65edd7c07ada67699e1f.jpg",
    "Totoro": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjulBK-A6MTC9_MDHXQn2ZnjNZbO7qLNzBCQcR4PgYuQHmBnfj6b2-wf6gwbDJC38BUSv3sY-PvVvrgpGrm54CztLSrLi_BzY2U2uLD_v2n8Q05A4iAA_RKvlCmmhvW0lanIPCafx4bJKo/s1600/Totoro.jpg",
    "Chu Totoro": "https://i.pinimg.com/474x/22/38/4b/22384b84289f18e8636828b07764a59e.jpg",
    "Chibi Totoro": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkjCg6brxxJSJbceuOUnLv1oksccxVhC-7HfK2AJZhMF1pdThjh7sAIO6hIgUrqCX_vmY&usqp=CAU",
    "Catbus": "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Catbus_%28My_Neighbor_Totoro%29.jpg/290px-Catbus_%28My_Neighbor_Totoro%29.jpg",
    "Renaldo Moon aka Moon aka Muta": "https://static.wikia.nocookie.net/a013c1ce-bbce-41a9-87c5-dd1af1e7f5a7/scale-to-width/755",
    "Cat King": "https://static.wikia.nocookie.net/dubbing9585/images/e/e2/TCR-KingCat.png",
    "Yuki": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG",
    "Haru": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3d/Haru_%28dam%29.jpg",
    "Baron Humbert von Gikkingen": "https://static.wikia.nocookie.net/disney/images/c/c0/Baron_Humbert_von_Gikkingen.png",
    "Natori": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TqmCu4EUxzsqQFW-w19H14-nXHxQDWDqWqTVCHvMOWpwxEgiAZc-AXvMQrV5VXkaKio&usqp=CAU",
    "Colonel Muska": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
    "Porco Rosso": "https://static.tvtropes.org/pmwiki/pub/images/porco_rosso2_800x_9.jpg",
    "Sosuke": "https://i.pinimg.com/736x/be/9d/da/be9dda1e3432255b2dfa345a6439b270.jpg",
    "Kiki": "https://i.pinimg.com/564x/e7/63/0c/e7630cb0fcfade92e4d98834053741e1.jpg",
    "Laputian Robot": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0899c91d-fa43-411a-b2e5-7f65211e4028/dfhxhg9-892c2140-97e7-4965-8c25-55d9bfff7233.jpg/v1/fill/w_1280,h_1601,q_75,strp/laputa_robot_soldier_by_wllmac_dfhxhg9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMSIsInBhdGgiOiJcL2ZcLzA4OTljOTFkLWZhNDMtNDExYS1iMmU1LTdmNjUyMTFlNDAyOFwvZGZoeGhnOS04OTJjMjE0MC05N2U3LTQ5NjUtOGMyNS01NWQ5YmZmZjcyMzMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.M9crR-ifkA30oksCvLWKQ4heKGepp8DVWwJk4WuVAoQ",
    "Chihiro Ogino": "https://i.pinimg.com/736x/e7/c0/49/e7c0499bfea455a8870ca08f1e1c197c.jpg",
    "Osono": "https://static.wikia.nocookie.net/astro-boy-productions/images/e/e1/Osono-01.png",
    "Ursula": "https://i.pinimg.com/474x/5f/e5/0a/5fe50a23e79b3070faa73d21a6e66b68.jpg",
    "Tombo": "https://i.pinimg.com/originals/35/0c/f8/350cf8f950518e78f77d4406367e45b1.jpg",
    "Madame": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Madame.jpg",
    "Bella Yaga": "https://www.animeclick.it/immagini/personaggio/Bella_Yaga/cover/113941-Bella_Yaga-foto.jpg",
    "Mandrake": "https://m.media-amazon.com/images/S/aplus-media/vc/79b9d79c-3ac6-44a8-bd85-8765fb0a321b.__CR0,0,1108,1108_PT0_SX300_V1___.jpg",
    "Earwig": "https://static01.nyt.com/images/2021/02/05/arts/earwig1/earwig1-mediumSquareAt3X.jpg",
    "Scarlet Rose": "https://movieplayer.net-cdn.it/t/images/2021/06/15/earwig-e-la-strega_1_jpeg_375x0_crop_q85.jpg",
    "Thomas": "https://media.wired.com/photos/64f9d24e1b27a741aa23c0dd/2:3/w_692,h_1038,c_limit/Studio-Ghibli-Ranked-Culture-HERON_img_1.jpg",
    "Custard": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7c/Custard.webp",
    "Niya": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR41sms5wEpbKZ0RyJbq1O06o2TE8qfl8fiET0Obggo3-0NmpZPEz17B15wgSyiYojN8&usqp=CAU"
  };

  // Estado para los personajes inicializado con los datos del JSON
  const [characters, setCharacters] = useState([]);

  //Estado para alternar entre JSON y API;
  const [useApi, setUseApi] = useState(false);
  // useEffect para cargar los personajes desde el JSON o API cuando el componente se monta
  useEffect(() => {
    if (useApi) {
      const fetchCharactersFromAPI = async () => {
        try {
          const response = await fetch('https://ghibliapi.vercel.app/people');
          const data = await response.json();
  
          const formattedCharacters = data.map((character) => {
            // Busca la imagen en el diccionario basado en el nombre del personaje
            const imageUrl = characterImages[character.name] || 'https://via.placeholder.com/200';
  
            return {
              name: character.name,
              image: imageUrl,
              description: character.gender || 'Sin descripción'
            };
          });
  
          setCharacters(formattedCharacters);
        } catch (error) {
          console.error('Error al obtener los personajes de la API:', error);
        }
      };
      fetchCharactersFromAPI();
    } else {
      setCharacters(charactersData); // Cargar desde JSON si no se usa API
    }
  }, [useApi]);

  const addCharacter = (newCharacter) => {
    if (!useApi) {
      setCharacters([...characters, newCharacter]);
    } else {
      alert("No se pueden añadir personajes en el modo API");
    }
  };


  const [showCharacters, setShowCharacters] = useState(true);


  const toggleCharacters = () => {
    setShowCharacters(!showCharacters);
  };

  return (
    <motion.div className="app-container font-medium bg-white/80 shadow-lg rounded-lg px-6 py-8 max-w-4xl mx-auto relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <h1 className="text-5xl font-bold text-gray-800 " >Bienvenido al mundo de Studio Ghibli</h1>
      <p className="text-gray-700 mt-4 font-bold">Explora los personajes de tus películas favoritas de Studio
        Ghibli.</p>


      {/* Botones para alternar entre JSON y API */}
      <motion.div className="flex justify-center space-x-4 mt-6 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}>
        <button className="transition duration-500 hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:bg-amber-500 text-white font-medium py-2 px-4 rounded-md" onClick={() => setUseApi(false)} >
          Cargar desde JSON
        </button>
        <button className="transition duration-500 hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:bg-amber-500 text-white font-medium py-2 px-4 rounded-md" onClick={() => setUseApi(true)} >
          Cargar desde API
        </button>

        {/* Botón para alternar la visibilidad de los personajes */}
        <button className="transition duration-500 hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:bg-amber-500 text-white font-medium py-2 px-4 rounded-md" onClick={toggleCharacters} >
          {showCharacters ? 'Ocultar personajes' : 'Mostrar personajes'}
        </button>

      </motion.div>
      <p className="text-left py-3 font-bold">¡Añade al personaje que quieras!</p>
      {/* Componente del formulario para añadir un nuevo personaje */}
      <AddCharacterForm onAddCharacter={addCharacter} />
      {/* Se muestran los personajes solo si showCaracters es true */}
      {showCharacters && (
        <motion.div className="characters-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {characters.map((character) => (
            <CharacterCard
              key={character.name}  // La propiedad key es necesaria cuando renderizamos listas en React
              name={character.name}
              image={character.image}
              description={character.description}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
export default App; 