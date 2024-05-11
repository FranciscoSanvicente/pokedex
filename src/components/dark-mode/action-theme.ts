'use server';

import { cookies } from 'next/headers'

export async function setTheme(value: string) {
    cookies().set('theme', value)
}

export async function getTheme() {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme');
    return { theme: theme ? theme.value : 'theme' }
}
