import { PokemonCard } from "../../components/PokemonCard";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { Container } from "./style";

export function Home() {
  const { data } = useQueryPokemonPage();
  console.log(data);

  return (
    <Container>
      <h1>{"Bem vindo á Pokédex do Reprogama Jucás"}</h1>

      <div className="gridCards">
        {data?.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} />;
        })}
      </div>
    </Container>
  );
}
