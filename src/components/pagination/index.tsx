import Item from './item';

const Pagination = ({ page, total, type, region }: { page: number, total: number, type: string | undefined, region: string | undefined, }) => {
    if (!total || total < 2) return null;
    const paginationItems = [
        { label: 'First', page: 1, show: page > 1 },
        { label: 'Previous', page: page - 1, show: page > 1 },
        { label: String(page - 2), page: page - 2, show: page > 2 },
        { label: String(page - 1), page: page - 1, show: page > 1 },
        { label: String(page), page: page, show: true, current: true },
        { label: String(page + 1), page: page + 1, show: page < total },
        { label: String(page + 2), page: page + 2, show: page < total - 1 },
        { label: 'Next', page: page + 1, show: page < total },
        { label: 'Last', page: total, show: page < total }
    ];
    const output: JSX.Element[] = paginationItems.filter(item => item.show).map((item, index) => (
        <Item item={item} region={region} key={index} type={type} current={page} />
    ));
    return (
        <nav aria-label="Pagination" className="flex items-center justify-center space-x-2 gap-y-2 my-4 flex-wrap">
            {output}
        </nav>
    );
};

export default Pagination;
