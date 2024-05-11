export function setTheme(theme: string) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        return
    }
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
}