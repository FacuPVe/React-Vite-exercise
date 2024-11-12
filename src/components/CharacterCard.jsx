import React from 'react';
import { motion } from "framer-motion";

function CharacterCard({ name, image, description }) {
    return (
        <motion.div className="character-card bg-white/80  shadow-lg rounded-lg p-4 hover:scale-150 transition-transform duration-300" whileHover={{ scale: 1.05 }}>
            <img src={image || 'https://via.placeholder.com/200'} alt={name} className="character-card-image w-40 h-40 rounded-full mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 mt-4">{name}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
}
export default CharacterCard;