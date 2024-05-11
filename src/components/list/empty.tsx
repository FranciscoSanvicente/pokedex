import Image from 'next/image';
import { blurImage } from './item/blur-image';

export default function Empty(): JSX.Element {
    return (
        <figure className='flex flex-col gap-4 justify-center m-auto w-max mt-16' aria-live="polite">
            <figcaption className='text-white text-3xl'>Didn&apos;t catch any Pokémon.</figcaption>
            <Image src="/not-found.jpeg" alt="No Pokémon found" width={250} height={250} className='mx-auto' placeholder='blur' blurDataURL={blurImage} />
        </figure>
    );
}
