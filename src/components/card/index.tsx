import Image from 'next/legacy/image';
import { PokemonApiService } from 'app/components/list/service';
import PokemonType from './type';
import PokemonStats from './stats';
import PokemonMoves from './moves';
import PokemonEvolutionPage from './chain-evolution';
import Header from './header';
import { blurImage } from '../list/item/blur-image';
import Characteristics from './characteristics';
import Navigation from './navigation';
import typeStyles from './types-styles';
import NotFound from './not-foud';
import { FlavorTextEntry, IProps, ISpecies, IItem } from './interfaces';

export default async function Card({ id }: IProps) {
    const url: string = PokemonApiService.constructUrl({ search: id });
    const data: IItem[] = await PokemonApiService.fetchData(url);
    if (!data) {
        return <div role="alert">Error loading Pokémon details.</div>;
    }
    const { entries }: { entries: IItem[], total: number } = await PokemonApiService.getEntries(data, { search: id });
    if (!entries.length) return <NotFound />
    const item = entries[0];
    const response: Response = await fetch(`${PokemonApiService.API_BASE}/pokemon-species/${item.species.name}`);
    const speciesData: ISpecies = await response.json();
    const description: FlavorTextEntry | undefined = speciesData.flavor_text_entries.find((entry: FlavorTextEntry) => entry.language.name === 'en');
    const color: string = typeStyles[item.types[0].type.name];
    const cls: string = `max-w-xl mx-auto my-10 rounded-lg shadow-md pb-1 ${color}`;
    const imageUrl: string = item.sprites?.other.showdown.front_default ||
        item.sprites?.front_default ||
        ''
    return (
        <article className={cls} aria-labelledby="pokemon-name">
            <Header item={item} color={color} />
            <div className='bg-white m-1 p-5 mt-36 rounded-xl shadow-2xl text-black'>
                <div className='text-center mt-[-142px] relative'>
                    <Image
                        src={imageUrl || blurImage}
                        placeholder='blur'
                        blurDataURL={blurImage}
                        alt={`Image of ${item.name}`}
                        width={280}
                        height={280}
                        objectFit='contain'
                        className='mx-auto'
                        unoptimized
                    />
                    <PokemonType types={item.types} />
                    <Navigation item={item} />
                </div>
                <Characteristics item={item} />
                <div>
                    <p>{description?.flavor_text || "Description not available."}</p>
                </div>
                <PokemonStats types={item.types} stats={item.stats} />
                <PokemonMoves types={item.types} moves={item.moves} />
                <PokemonEvolutionPage evolutionChain={speciesData.evolution_chain} />
            </div>
        </article>
    );
}
