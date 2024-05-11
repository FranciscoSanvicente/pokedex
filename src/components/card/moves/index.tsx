import React from 'react';
import Item from './item';
import { IMoveProps, MoveDetail } from '../interfaces';

const PokemonMoves: React.FC<IMoveProps> = ({ moves, types }: IMoveProps): JSX.Element => {
    const output: JSX.Element[] = moves.map((item: MoveDetail) => <Item key={item.move.name} item={item} types={types} />);

    return (
        <section aria-labelledby="pokemon-moves-heading">
            <h3 id="pokemon-moves-heading" className='font-bold text-lg'>Moves:</h3>
            <div className='max-h-72 overflow-y-auto'>
                {output}
            </div>
        </section>
    );
};

export default PokemonMoves;
