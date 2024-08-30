import logo from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { Container } from "./styles";

export function Logo(){
  const { user } = useAuth();
  
  return(
    <Container>
      {[USER_ROLE.ADMIN].includes(user.role) ?
      <div className="admin">
        <img src={logo}/>
        <h2>food explorer</h2>
        <span>admin</span>
      </div>
      :
      <div className="user">
        <img src={logo}/>
        <h2>food explorer</h2>
      </div>
      }
      
    </Container>
  );
}