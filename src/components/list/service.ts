import { IProps } from "./interfaces";

export class PokemonApiService {
    static API_BASE: string = 'https://pokeapi.co/api/v2';

    // Método para construir URLs basadas en los filtros
    static constructUrl({ search, type, region, filter, offset, limit }: IProps): string {
        const urls = {
            default: `/pokemon${offset ? `?offset=${offset}&limit=${limit}` : `?limit=${limit}`}`,
            type: `/type/${type}`,
            region: `/region/${region}`,
            search: `/pokemon/${search}`
        };
        return `${this.API_BASE}${search ? urls.search : filter ? urls[filter] : urls.default}`;
    }

    // Método para obtener datos de la API
    static async fetchData(url: string): Promise<any> {
        const response = await fetch(url);
        if (!response || !response.ok) {
            return []
        }
        return response.json();
    }

    // Método para manejar los datos de la región
    static async fetchRegionData(pokedexes: any[], limit: number, offset: number): Promise<any> {
        let dataPokemon: any[] = [];
        if (!pokedexes) return { entries: dataPokemon, total: 0 }
        for (const item of pokedexes) {
            const pokedexUrl = `${this.API_BASE}/pokedex/${item.name}`; // Asumiendo que cada pokedex tiene un 'name'
            const pokedexData = await this.fetchData(pokedexUrl);
            dataPokemon = [...dataPokemon, ...pokedexData.pokemon_entries.map((entry: any) => entry.pokemon_species)];
        };
        return { entries: dataPokemon.slice(offset, offset + limit), total: dataPokemon.length };
    }

    // Método para obtener entradas dependiendo del tipo de consulta
    static async getEntries(data: any, props: IProps): Promise<{ entries: any[], total: number }> {
        const { type, region, search, offset, limit }: any = props;

        const handlers = {
            search: () => {
                return { entries: Array.isArray(data) ? [] : [data], total: data ? 1 : 0 };
            },
            type: () => {
                const total = data.pokemon.length;
                const entries = data.pokemon.map((item: any) => item.pokemon).slice(offset, offset + limit);
                return { entries, total };
            },
            region: async () => {
                const regionData = await this.fetchRegionData(data.pokedexes, limit, offset);
                return { entries: regionData.entries, total: regionData.total };
            },
            default: () => {
                const total = data.count;
                const entries = data.results;
                return { entries, total };
            }
        };

        return handlers[search ? 'search' : type ? 'type' : region ? 'region' : 'default']();
    }
}
