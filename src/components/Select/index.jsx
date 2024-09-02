import { Container } from "./styles";

export function Select({ icon: Icon, category,...rest }){
  return(
    <Container>
      <select defaultValue={category} {...rest}>
        <option value="Refeição">Refeição</option>
        <option value="Sobremesa">Sobremesa</option>
        <option value="Bebida">Bebida</option>
      </select>
      { Icon && <Icon size={24} /> }
    </Container>
  );
}