import Link from 'next/link';

export default function Item({ item, type, region, current }: { item: { page: number, label: string }, region: string | undefined, type: string | undefined, current: number }) {
    const route = `/?page=${item.page}${type ? `&type=${type}` : ""}${region ? `&region=${region}` : ""}`;
    const cls = `px-4 py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300 transition duration-200 shadow-md ${current === item.page ? 'bg-red-500 dark:bg-red-700 dark:text-white text-slate-950' : ''}`
    return (
        <Link href={route} scroll={false} legacyBehavior>
            <a className={cls}
                aria-current={item.page ? 'page' : undefined}
                tabIndex={0}
                role="button"
                aria-label={`Go to page ${item.page}`}>
                {item.label}
            </a>
        </Link>
    );
};
