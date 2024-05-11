"use client"
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { setTheme as setThemeCookie } from "./action-theme";
import { setTheme } from "./set-theme";

export default function Theme({ theme }: any): JSX.Element {
    const themeUser = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeValue = theme ? theme : themeUser ? "dark" : "light"
    const text: string =
        themeValue === 'dark' ? 'Change to light theme' : 'Change to dark theme';
    setTheme(themeValue)
    const toggleTheme = () => {
        const themeToSet = theme === "dark" ? "light" : "dark"
        setThemeCookie(themeToSet);
        setTheme(themeToSet)
    }

    return (
        <div className='flex gap-2 static right-0 sm:absolute '>
            {themeValue === 'dark' && (
                <button
                    onClick={toggleTheme}
                    title='Dark mode'
                    type='button'
                    className='hs-dark-mode-active:hidden  hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium'
                >
                    <FaRegMoon className='flex-shrink-0 size-5 dark:text-white text-slate-950' />
                </button>
            )}
            {themeValue === 'light' && (
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
    );
}
