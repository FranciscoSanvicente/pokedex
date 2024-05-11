import Link from "next/link";
import { PokemonApiService } from "../service";
import Image from "next/legacy/image";
import { blurImage } from "./blur-image";
import { IItem } from "app/components/card/interfaces";

interface IProps {
    name: string,
    url: string
}

export default async function Item(item: IProps) {
    const cls: string = `flex flex-col items-center w-32 mx-auto bg-gradient-radial rounded p-2 relative shadow-md`;
    const pokemon: IItem = await PokemonApiService.fetchData(
        `${PokemonApiService.API_BASE}/pokemon/${item.name}`
    );
    if (!pokemon || !pokemon?.name) return;
    const imageUrl: string = pokemon.sprites?.other.showdown.front_default ||
        pokemon.sprites?.front_default ||
        ''
    const name: string = pokemon.name.replaceAll("-", " ")
    return (
        <div role="listitem">
            <Link href={`/pokemon/${item.name}`} role="button" tabIndex={0} aria-label={`View details of ${name}`} className={cls} >

                <Image
                    src={imageUrl || blurImage}
                    alt={`Pokemon ${name}`}
                    width={70}
                    height={70}
                    className='h-[70px] mt-2'
                    unoptimized
                    placeholder="blur"
                    blurDataURL={blurImage}
                    objectFit="contain"
                />
                <span className='absolute top-0 right-2 text-zinc-900 dark:text-white'>
                    #{pokemon.id}
                </span>
                <span className='text-zinc-900 dark:text-white first-letter:uppercase'>
                    {name}
                </span>

            </Link>
        </div>

    );
}
