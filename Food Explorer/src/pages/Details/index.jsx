import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi";
import ordersUser from "../../assets/ordersUser.svg";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Container, Dish, Ingredients } from "./styles";

import { api } from "../../services/api";
import { USER_ROLE } from "../../utils/roles";

export function Details(){
  const { user } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState(null);
  const [formattedPrice, setFormattedPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(formattedPrice);
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  let dishImageUrl;

  function handleAddNumber(){
    if(number === 10){
      return;
    }
    setNumber(number + 1);
  }
  function handleSubtractNumber(){
    if(number === 1){
      return;
    }
    setNumber(number - 1);
  }
  
  function handleBack(){
    navigate(-1);
  }
  
  function handleEdit(id){
    navigate(`/edit/${id}`);
  }

  useEffect(() => {
    if(price !== null){
      const newFormattedPrice = parseFloat(price.replace(",", "."));
      setFormattedPrice(newFormattedPrice);
    }
  }, [price]);
  useEffect(() => {
    setTotalPrice((formattedPrice * number).toFixed(2));
  }, [number, formattedPrice]);


  useEffect(() => {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
      dishImageUrl = `${api.defaults.baseURL}/files/${response.data.image}`;
      setPrice(response.data.price);
    }

    fetchDish();
  }, []);

  return(
    <Container>
      <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)}/>
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>

      {
        data && 
        <main>
          <a onClick={handleBack} className="back"><FiChevronLeft/>voltar</a>
          
          <Dish>
            <img src={`${api.defaults.baseURL}/files/${data.image}`}/>
            <div className="info">
              <h1>{data.title}</h1>
              <p>{data.description}</p>

              {
                data.ingredients &&
                <Ingredients>
                  {
                    data.ingredients.map(ingredient => (<Ingredient key={String(ingredient.id)} title={ingredient.name}/>))
                  }
                </Ingredients>
              }
              <div className="buttons">
                {
                  [USER_ROLE.USER].includes(user.role) && 
                  <div className="counter">
                    <button onClick={handleSubtractNumber}><FiMinus/></button>
                    <span>
                      {
                        number === 0 || number === 10 ? number : "0" + number 
                      }
                    </span>
                    <button onClick={handleAddNumber}><FiPlus/></button>
                  </div>
                }
                {
                  [USER_ROLE.ADMIN].includes(user.role) ? <Button className="edit" title="Editar prato" onClick={() => handleEdit(data.id)}/> : <Button icon={ordersUser} title={`pedir - R$ ${totalPrice.replace(".", ",")}`}/>
                }
              </div>
            </div>
          </Dish>
        </main>
      }
      <Footer/>
    </Container> 
  )
}