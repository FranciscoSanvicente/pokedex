import { typeTextStyles } from '../types-styles';
import { IMoves, MoveDetail, MoveType } from '../interfaces';

export default async function Item({ item, types }: { item: MoveDetail, types: MoveType[] }) {
    const { move } = item
    const response: Response = await fetch(move.url);
    const data: IMoves = await response.json();
    const description = data.flavor_text_entries.find((entry: any) => entry.language.name === 'en')?.flavor_text.replace(/[\n\f]/g, ' ');
    const mainTypeStyle: string = types.length > 0 ? typeTextStyles[types[0].type.name] : 'text-gray-800 bg-gray-200';
    const [textColor]: string[] = mainTypeStyle.split(' ');
    const name: string = move.name.replace('-', ' ')
    return (
        <article aria-label={`${name} move details`} className="my-2">
            <h4 className={`first-letter:capitalize ${textColor} font-bold`}>{name}</h4>
            <p>{description}</p>
        </article>
    )
}
