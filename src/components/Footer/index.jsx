import footerLogo from "../../assets/footerLogo.svg";
import { Container } from "./styles";

export function Footer(){
  return(
    <Container>
      <h3><img src={footerLogo}/> food explorer</h3>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}