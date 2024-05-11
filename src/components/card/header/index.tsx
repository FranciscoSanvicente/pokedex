'use client';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { IoHomeOutline } from "react-icons/io5";
import Link from 'next/link';
import { IHeaderProps } from '../interfaces';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function Header({ item, color }: IHeaderProps) {
    const router: AppRouterInstance = useRouter();
    const name: string = item.name.replaceAll('-', ' ');
    const cls: string = `flex justify-between items-center mb-4 pt-5 pr-5 pl-5 ${color.split("-")[0]}`
    return (
        <header className={cls}>
            <div className='flex gap-3 items-center'>
                <div className='flex items-center gap-2'>
                    <button
                        title='Back'
                        aria-label='Go back'
                        onClick={router.back}
                        tabIndex={0}
                        className=' border-none bg-transparent '
                    >
                        <IoMdArrowRoundBack className='h-6 w-6 cursor-pointer' />
                    </button>
                    <Link href="/" title="Go to home" aria-label='Go to home'>
                        <IoHomeOutline className='h-6 w-6 cursor-pointer' />
                    </Link>

                </div>

                <h1 id='pokemon-name' className='text-2xl font-bold  first-letter:capitalize'>
                    {name}
                </h1>
            </div>
            <span className='text-sm font-semibold '>#{item.id}</span>
        </header>
    );
}
