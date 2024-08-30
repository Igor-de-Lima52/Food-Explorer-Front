import favorite from "../../assets/favorite.svg";
import pencil from "../../assets/pencil.svg";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth"; 
import { USER_ROLE } from "../../utils/roles";

import { Button } from "../Button";

import { Container } from "./styles";

import { api } from "../../services/api";

export function Dish({ data, ...rest }){
  const { user } = useAuth();

  const [number, setNumber] = useState(0);

  const dishImageUrl = `${api.defaults.baseURL}/files/${data.image}`;

  const navigate = useNavigate();

  function handleAddNumber(){
    if(number === 10){
      return;
    }
    setNumber(number + 1);
  }

  function handleSubtractNumber(){
    if(number === 0){
      return;
    }
    setNumber(number - 1);
  }

  function handleDetails(id){
    navigate(`/dish/${id}`);
  }

  function handleEdit(id){
    navigate(`/edit/${id}`);
  }

  useEffect(() => {
    
  }, [number]);

  return(
    <Container {...rest}>
      {
        [USER_ROLE.USER].includes(user.role) 
        ? 
        <button className="favorite"><img src={favorite} alt="Coração com borda branca"/></button>
        :
        <button className="edit" onClick={() => handleEdit(data.id)}><img src={pencil} alt="Imagem de lápis com borda branca"/></button>
      }
      <img src={dishImageUrl} alt={data.title}/>
      <h3><a onClick={() => handleDetails(data.id)}>{data.title} &gt;</a></h3>
      <div className="description">
        <p>{data.description}</p>
      </div>
      <h6>R$ {data.price}</h6>
      {
        [USER_ROLE.USER].includes(user.role) && 
        <div className="desktop">
          <div className="counter">
            <button onClick={handleSubtractNumber}><FiMinus/></button>
            <span>
              {
                number === 0 || number === 10 ? number : "0" + number 
              }
            </span>
            <button onClick={handleAddNumber}><FiPlus/></button>
          </div>
          <Button title="Incluir" />
        </div>
      }
    </Container>
  )
}