import Header from 'app/components/header';
import PokemonList from 'app/components/list';

interface IProps {
  params: {};
  searchParams: {
    query: string;
    page: string;
    type: string;
    region: string;
  };
}

export default function Page({ searchParams }: IProps) {
  const currentPage = parseInt(searchParams.page || "1");
  const search = searchParams.query;
  const type = searchParams.type;
  const region = searchParams.region;
  const limit = 25;
  const offset = (currentPage - 1) * limit;
  const filter = type ? "type" : region ? "region" : '';

  return (
    <main aria-labelledby="main-heading" role="main" className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
      <Header />
      <h1 id="main-heading" className="sr-only">Pokémon List</h1>
      <PokemonList key={searchParams.page} page={currentPage} search={search} type={type} region={region} offset={offset} limit={limit} filter={filter} />
    </main>
  );
}
