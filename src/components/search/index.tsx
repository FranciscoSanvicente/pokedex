'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import styles from './index.module.scss';

export default function SearchFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearchChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set('query', value);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className={styles['input-search'] + " relative flex items-center mt-6 bg-white dark:bg-zinc-700 rounded max-w-2xl mx-auto w-full shadow-md"}>
            <input
                type='search'
                aria-label='Search Pokémon'
                placeholder='Search Pokémon'
                onChange={handleSearchChange}
                defaultValue={searchParams.get('query') || ''}
                className='flex-grow p-3 pl-10 rounded focus:outline-none shadow-md'
            />
        </div>
    );
}
