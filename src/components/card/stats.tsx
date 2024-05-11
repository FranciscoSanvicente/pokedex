import { IStats } from './interfaces';
import { typeTextStyles } from './types-styles'

const PokemonStats = ({ stats, types }: IStats) => {
    const mainTypeStyle: string = types.length > 0 ? typeTextStyles[types[0].type.name] : 'text-gray-800 bg-gray-200';
    const [textColor, barColor]: string[] = mainTypeStyle.split(' ');
    const output: JSX.Element[] = stats.map((stat) => (
        <div key={stat.stat.name} className="flex items-center gap-1 my-1" role="presentation">
            <span className={`capitalize w-1/3 ${textColor}`} aria-label={`${stat.stat.name.replace('-', ' ')}: ${stat.base_stat}`}>
                {stat.stat.name.replace('-', ' ')}
            </span>
            <div className='flex gap-2 w-full items-center'>
                <span className={`w-8 font-semibold ${textColor}`}>{stat.base_stat}</span>
                <div className="bg-gray-300 w-2/3 rounded-full h-2" aria-hidden="true">
                    <div className={`${barColor} h-2 rounded-full`} style={{ width: `${(stat.base_stat / 255) * 100}%` }} aria-hidden="true"></div>
                </div>
            </div>
        </div>
    ));
    return (
        <section aria-labelledby="pokemon-stats-heading">
            <h2 id="pokemon-stats-heading" className='font-bold text-lg'>Stats:</h2>
            <div>
                {output}
            </div>
        </section>
    );
};

export default PokemonStats;
