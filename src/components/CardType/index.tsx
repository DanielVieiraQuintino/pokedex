import { PokemonType } from "../../@types/pokemon";
import { Container } from "./style";

export type TypeProps = {
  type: PokemonType;
}

export function CardType({ type }: TypeProps) {
  return (
    <Container type={type}>
      <h1>{type}</h1>
    </Container>
  );
}