import orders from "../../assets/orders.svg";
import ordersUser from "../../assets/ordersUser.svg";

import { FiLogOut, FiSearch, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Logo } from "../Logo";

import { Button } from "../Button";
import { InputSearch } from "../InputSearch";

import { USER_ROLE } from "../../utils/roles";  

import { useAuth } from "../../hooks/auth";
import { Container, Search } from "./styles";


export function Header({ onOpenMenu, search }){
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  let order = 0;
  
  function handleNew(){
    navigate("/new");
  }

  function handleSignOut(){
    signOut();
  }
  return(
    <Container>
      <button className="menu" onClick={onOpenMenu}>
        <FiMenu/>
      </button>

      <Logo/>

      <Search>
        <InputSearch placeholder="Busque por pratos ou ingredientes" icon={FiSearch} className="input" onChange={e => search(e.target.value)} />
      </Search>

      {[USER_ROLE.USER].includes(user.role) && <img src={orders} className="orders"/>}
      
      {[USER_ROLE.ADMIN].includes(user.role) ? <Button title="Novo prato" className="dishes" onClick={handleNew}/> : <Button title={`Pedidos (${order})`} className="dishes" icon={ordersUser}/>}

      <button  className="logout" onClick={handleSignOut}>
        <FiLogOut />
      </button>
    </Container>
  )
}