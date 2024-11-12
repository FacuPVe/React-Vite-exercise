import React, { useState } from 'react'; // Nos tenemos que asegurar de tener importado useState para el correcto funcionamiento del botón
import { motion } from "framer-motion";

function AddCharacterForm({ onAddCharacter }) {
    // Estado para manejar los inputs del formulario
    const [newCharacter, setNewCharacter] = useState({
        name: '',
        image: '',
        description: ''
    });

    // Función para manejar cambios en el formulario
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewCharacter({
            ...newCharacter, // Se mantienen los valores anteriores
            [name]: value    // Se actualiza solo el campo que ha cambiado
        });
    };
    // Función para añadir un nuevo personaje
    const handleSubmit = (event) => {
        event.preventDefault(); // Se evita que el formulario recargue la página(comportamiento por defecto)
        onAddCharacter(newCharacter); // Se llama a la función que viene del padre para añadir el nuevo personaje
        setNewCharacter({ name: '', image: '', description: '' }); // Se limpia el formulario para una nueva insercción de personaje
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 ">
            <motion.input type="text" name="name" placeholder="Nombre del personaje" value={newCharacter.name} onChange={handleInputChange} required className="bg-white/80 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400" 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }} />
            <motion.input type="text" name="image" placeholder="URL de la imagen" value={newCharacter.image} onChange={handleInputChange} required className="bg-white/80 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400" 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }} />
            <motion.input type="text" name="description" placeholder="Descripción del personaje" value={newCharacter.description} onChange={handleInputChange} required className="bg-white/80 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400" 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }} />
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}>
            <button type="submit" className="transition duration-500 hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:bg-amber-500 text-white font-medium py-2 px-4 rounded-md">Añadir un personaje</button>
            </motion.div>
        </form >
    );
}

export default AddCharacterForm;