import SearchFilter from 'app/components/search';
import dynamic from 'next/dynamic';
import { PokemonApiService } from '../list/service';
import FilterSelect from './select';
import { IDataType, IOption, Result } from './interfaces';
const ThemeSwitcher = dynamic(() => import("app/components/dark-mode"), { ssr: false, loading: () => <div className='w-[187px] h-[24px]'></div> })

export default async function Header() {
    const response: Response = await fetch(`${PokemonApiService.API_BASE}/type`);
    const data: IDataType = await response.json();
    const responseRegions: Response = await fetch(`${PokemonApiService.API_BASE}/region`);
    const dataRegions: IDataType = await responseRegions.json();
    const optionsTypes: IOption[] = data.results.map((item: Result) => ({
        label: item.name,
        value: item.name
    }));
    const optionsRegions: IOption[] = dataRegions.results.map((item: Result) => ({
        label: item.name,
        value: item.name
    }));

    return (
        <header aria-label="Main Navigation" className='bg-red-500 dark:bg-red-700 p-6 rounded-t-lg w-full flex flex-col'>
            <div className='flex justify-center relative flex-col-reverse items-center'>
                <h1 className='dark:text-white text-slate-950 text-3xl font-bold text-center  '>
                    Pokédex
                </h1>
                <ThemeSwitcher />
            </div>

            <SearchFilter />
            <div className='flex gap-3 justify-center items-end flex-wrap'>
                <FilterSelect options={optionsTypes} name="type" label="Filter by Pokémon type" />
                <FilterSelect options={optionsRegions} name="region" label="Filter by regions" />
            </div>
        </header>
    );
}
