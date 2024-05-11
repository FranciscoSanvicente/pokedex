import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IItem } from './interfaces';

const Navigation = ({ item }: { item: IItem }) => {
    const prevDisabled: boolean = item.id === 1;
    const nextDisabled: boolean = item.id === 10277; // Suponiendo 10277 es el ID máximo
    return (
        <nav aria-label="Pokémon navigation" className='absolute w-full left-0 bottom-[150px] max-w-xl mx-auto flex justify-between px-0 sm:px-5'>
            <Link
                href={`/pokemon/${item.id - 1}`}
                className={`text-black w-5 h-5 ${prevDisabled ? 'pointer-events-none opacity-15' : ''
                    }`}
                aria-disabled={prevDisabled}
                role="button"
                tabIndex={prevDisabled ? -1 : 0}
                aria-label="Go to previous Pokémon"
            >
                <FaArrowLeft />
            </Link>
            <Link
                href={`/pokemon/${item.id + 1}`}
                className={`text-black w-5 h-5 ${nextDisabled ? 'pointer-events-none opacity-15' : ''
                    }`}
                aria-disabled={nextDisabled}
                role="button"
                tabIndex={nextDisabled ? -1 : 0}
                aria-label="Go to next Pokémon">

                <FaArrowRight />
            </Link>
        </nav>
    );
};
export default Navigation;
