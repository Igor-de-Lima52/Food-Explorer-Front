import { Container } from "./styles";

export function Button({ title, loading = false, icon: Icon, children, ...rest}){
  return(
    <Container type="button" disabled={loading} {...rest}>
      <div>
        { Icon && <img src={Icon} size={20} /> }
        {loading ? "Carregando" : title}
        {children}
      </div>
    </Container>
  )
}