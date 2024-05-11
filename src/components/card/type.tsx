import React from 'react';
import typeStyles from './types-styles';
import { IPokemonTypeProps, TType } from './interfaces';



const PokemonType = ({ types }: IPokemonTypeProps) => {
    const output: JSX.Element[] = types.map((typeObj: TType) => (
        <span
            key={typeObj.type.name}
            className={`${typeStyles[typeObj.type.name] || 'bg-gray-200 text-gray-800'} px-2 py-1 rounded-3xl`}
            role="note"  // Indica que es información adicional descriptiva del Pokémon
            aria-label={`${typeObj.type.name.charAt(0).toUpperCase() + typeObj.type.name.slice(1)} type`}
        >
            {typeObj.type.name.charAt(0).toUpperCase() + typeObj.type.name.slice(1)}
        </span>
    ));

    return (
        <div className="flex gap-2 justify-center mt-3" aria-label="Pokémon types">
            {output}
        </div>
    );
};

export default PokemonType;
