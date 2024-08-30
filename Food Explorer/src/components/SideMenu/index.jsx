import { IoCloseOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { InputSearch } from "../InputSearch";
import { Footer } from "../Footer";
import { Container, Header, Title, Nav } from "./styles";

import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function SideMenu({ menuIsOpen, onCloseMenu }){
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function handleNew(){
    navigate("/new");
  }

  function handleSignOut(){
    signOut();
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        { menuIsOpen && 
          <button onClick={onCloseMenu}>
            <IoCloseOutline/>
          </button>
        }
        <Title>
          Menu
        </Title>
      </Header>
      <Nav>
        {/* <InputSearch placeholder="Busque por pratos ou ingredientes" icon={FiSearch} className="navSearch" onChange={e => setSearch(e.target.value)}/> */}
        {[USER_ROLE.ADMIN].includes(user.role) && <a href="#" onClick={handleNew}>Novo prato</a>}
        <a href="#" onClick={handleSignOut}>Sair</a>
      </Nav>
      <Footer/>
    </Container>
  )
}