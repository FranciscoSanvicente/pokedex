import { blurImage } from 'app/components/list/item/blur-image';
import { PokemonApiService } from 'app/components/list/service';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { Chain, IEvolutionData, IEvolutionDetail, IItem } from '../interfaces';

const fetchEvolutionData = async (url: string): Promise<IEvolutionDetail[]> => {

    const response: Response = await fetch(url);
    const data: IEvolutionData = await response.json();

    let chain: Chain = data.chain;
    const evolutionDetails: IEvolutionDetail[] = [];

    do {
        const species_name: string = chain.species.name;
        const species_url: string = chain.species.url;
        const id: string | undefined = species_url.split('/').filter(Boolean).pop();
        const pokemon: IItem = await PokemonApiService.fetchData(
            `${PokemonApiService.API_BASE}/pokemon/${id}`
        );
        const image_url: string = pokemon.sprites?.other.showdown.front_default ||
            pokemon.sprites?.front_default ||
            ''
        evolutionDetails.push({ species_name, species_url, image_url });
        chain = chain.evolves_to[0];
    } while (chain && chain.hasOwnProperty('evolves_to'));

    return evolutionDetails;
};

export default async function EvolutionChain({ evolutionChainUrl }: { evolutionChainUrl: string }) {
    const evolutionDetails: IEvolutionDetail[] = await fetchEvolutionData(evolutionChainUrl);
    const output: JSX.Element[] = evolutionDetails.map((detail: IEvolutionDetail): JSX.Element => {
        return (
            <li key={detail.species_name} className='flex flex-col items-center gap-x-3'>
                <Link
                    key={detail.species_name}
                    href={`/pokemon/${detail.species_name}`}
                    scroll={false}

                >
                    <div className='flex flex-col items-center my-4 gap-x-3'>
                        <Image
                            unoptimized
                            src={detail.image_url}
                            alt={`Pokémon: ${detail.species_name}`}
                            width={96}
                            height={96}
                            objectFit='contain'
                            placeholder='blur'
                            blurDataURL={blurImage}
                        />
                        <span className='text-center first-letter:capitalize font-semibold'>
                            {detail.species_name}
                        </span>
                    </div>
                </Link>
            </li>
        );
    });
    return <ul className='flex justify-start gap-2 items-end'>{output}</ul>;
}
