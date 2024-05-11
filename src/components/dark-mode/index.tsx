"use client";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<string>(() => {
        // Verifica primero el tema en localStorage y luego la preferencia del sistema
        return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    // Función para cambiar el tema y almacenarlo en localStorage
    const toggleTheme = (): void => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeInDOM(newTheme);
    };

    // Función para aplicar la clase adecuada en el elemento raíz
    const updateThemeInDOM = (theme: string) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Cargar el tema cuando el componente se monta
    useEffect(() => {
        updateThemeInDOM(theme);
    }, [theme]);
    const text: string =
        theme === 'dark' ? 'Change to light theme' : 'Change to dark theme';
    return (
        <div className='flex gap-2 static right-0 sm:absolute '>
            {theme === 'dark' && (
                <button
                    onClick={toggleTheme}
                    title='Dark mode'
                    type='button'
                    className='hs-dark-mode-active:hidden  hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium'
                >
                    <FaRegMoon className='flex-shrink-0 size-5 dark:text-white text-slate-950' />
                </button>
            )}
            {theme === 'light' && (
                <button
                    onClick={toggleTheme}
                    title='Light mode'
                    type='button'
                    className='hs-dark-mode-active:block  hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium'
                    data-hs-theme-click-value='light'
                >
                    <FaRegSun className='flex-shrink-0 size-5 dark:text-white text-slate-950' />
                </button>
            )}
            <span onClick={toggleTheme} className='dark:text-white text-slate-950  text-base font-bold text-center cursor-pointer'>
                {text}
            </span>
        </div>
    )
}
