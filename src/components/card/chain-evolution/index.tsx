import { IEvolutionChain } from '../interfaces';
import EvolutionChain from './item';

const PokemonEvolutionPage = ({ evolutionChain }: IEvolutionChain): JSX.Element => {
    return (
        <section aria-labelledby="evolution-chain-heading">
            <h4 id="evolution-chain-heading" className='font-bold text-lg'>Evolution Chain:</h4>
            <EvolutionChain evolutionChainUrl={evolutionChain.url} />
        </section>
    );
};

export default PokemonEvolutionPage;
