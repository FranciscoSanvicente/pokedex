'use client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useSearchParams, usePathname, useRouter, ReadonlyURLSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IOption, IPropsSelect } from './interfaces';

export default function FilterSelect({ options, name, label }: IPropsSelect) {
    const searchParams: ReadonlyURLSearchParams = useSearchParams();
    const pathname: string = usePathname();
    const { replace }: AppRouterInstance = useRouter();

    function handleSearchChange(event: ChangeEvent<HTMLSelectElement>) {
        const value: string = event.currentTarget.value;
        const params = new URLSearchParams({ [name]: value });
        if (value) params.set(name, value);
        else params.delete(name);
        const route: string = `${pathname}?${params.toString()}`;
        replace(route);
    }
    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const defaultValue: string = searchParams.get(name)?.toString() || '';
    const output: JSX.Element[] = options.map((item: IOption) => {
        return (
            <option
                key={item.label}
                value={item.value}
                className='first-letter:uppercase'
            >
                {capitalizeFirstLetter(item.label)}
            </option>
        );
    });

    return (
        <div className='relative'>
            <form className='flex flex-col gap-1 mt-2'>
                <label
                    htmlFor={name}
                    className='dark:text-white text-slate-950  '
                >
                    {label}
                </label>
                <select
                    id={name}
                    title='Select'
                    name={name}
                    value={defaultValue}
                    onChange={handleSearchChange}
                    className='appearance-none min-w-52 shadow-md dark:text-black text-gray-800  border-gray-300  py-2 px-4 rounded  focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full'
                >
                    <option value=''>Select</option>
                    {output}
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 dark:text-black text-gray-800  top-[40px] '>
                    <MdKeyboardArrowDown className='fill-current h-5 w-5' />
                </div>
            </form>
        </div>
    );
}
