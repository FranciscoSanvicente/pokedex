import React from 'react';
import Item from './item';
import { PokemonApiService } from './service';
import { IProps } from './interfaces';
import Empty from './empty';
import Pagination from '../pagination';
import { IDataType, Result } from '../header/interfaces';

export default async function PokemonList(props: IProps) {
    const { page = 1, limit = 20 } = props;
    const offset = (page - 1) * limit;
    const updatedProps = { ...props, offset, limit };
    const url = PokemonApiService.constructUrl(updatedProps);
    const data: IDataType = await PokemonApiService.fetchData(url);
    const { entries, total }: { entries: Result[], total: number } = await PokemonApiService.getEntries(data, updatedProps);

    if (!entries.length) return <Empty />;

    const output: JSX.Element[] = entries.map((item: any) => (
        <Item {...item} key={item.name} />
    ));

    const totalPages: number = Math.ceil(total / limit);
    return (
        <>
            <Pagination page={page} total={totalPages} type={props.type} region={props.region} />
            <div role="list" className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 gap-6 p-6 bg-white dark:bg-zinc-900 rounded-b-lg m-auto'>
                {output}
            </div>
        </>
    );
}
