import { PokemonType } from "../../@types/pokemon";
import { Container } from "./style";

export type TypeProps = {
  type: PokemonType;
  size?: number;
}

export function CardType({ type, size = 10 }: TypeProps) {
  return (
    <Container type={type} size={size}>
      <h1>{type}</h1>
    </Container>
  );
}
