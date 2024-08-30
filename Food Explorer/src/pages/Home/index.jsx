import macarons from "../../assets/macarons.svg";

import { DISH_CATEGORY } from "../../utils/categories";

import { useEffect, useState } from "react";
import "@splidejs/react-splide/css"
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Dish } from "../../components/Dish";
import { Footer } from "../../components/Footer";

import { Container } from "./styles";
import { api } from "../../services/api";

export function Home(){
  const [search, setSearch] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes(){
      let response = await api.get(`/dishes`);
      if (search) {
        response = await api.get(`/dishes?title=${search}`);
        
        if (response.data.length === 0) {
          response = await api.get(`/dishes?title&ingredients=${search}`);
        }
      }
      setDishes(response.data);
    }
    fetchDishes();
  }, [search]);

  return(
    <Container>
      <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)}/>
      <Header onOpenMenu={() => setMenuIsOpen(true)} search={setSearch} />
      <main>
        <div className="card">
          <img src={macarons} alt="Imagem de macarons coloridos"/>
          <div className="content">
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
        <div className="carrousel">
          <h2>Refeições</h2>
          <Splide className="slide" options={{
            type: "loop",
            perMove: 1,
            pagination: false,
            breakpoints: {
              360: {
                perPage: 1.5,
              },  
              540: {
                perPage: 1.5,
              },
              690:{
                perPage: 2,
              },
              768: {
                perPage: 3,
                drag: true,
              },
              1280: {
                arrows: false,
              },
              4000: {
                perPage: 3,
              }
            }
          }}>
              {
                dishes.map(dish => (
                  dish.category === DISH_CATEGORY.MEAL && 
                    <SplideSlide key={String(dish.id)} >
                      <Dish data={dish}/>
                    </SplideSlide>
                ))
              }
          </Splide>
        </div>
        <div className="carrousel">
          <h2>Sobremesas</h2>
          <Splide className="slide" options={{
            type: "loop",
            perMove: 1,
            pagination: false,
            breakpoints: {
              360: {
                perPage: 1.5,
              },  
              540: {
                perPage: 1.5,
              },
              690:{
                perPage: 2,
              },
              768: {
                perPage: 3,
                drag: true,
              },
              1280: {
                arrows: false,
              },
              4000: {
                perPage: 3,
              }
            }
          }}>
              {
                dishes.map(dish => (
                  dish.category === DISH_CATEGORY.DESERT && 
                  <SplideSlide key={String(dish.id)} >
                    <Dish data={dish}/>
                  </SplideSlide>
                ))
              }
          </Splide>
        </div>
        <div className="carrousel">
          <h2>Bebidas</h2>
          <Splide className="slide" options={{
            type: "loop",
            perMove: 1,
            pagination: false,
            breakpoints: {
              360: {
                perPage: 1.5,
              },  
              540: {
                perPage: 1.5,
              },
              690:{
                perPage: 2,
              },
              768: {
                perPage: 3,
                drag: true,
              },
              1280: {
                arrows: false,
              },
              4000: {
                perPage: 3,
              }
            }
          }}>
              {
                dishes.map(dish => (
                  dish.category === DISH_CATEGORY.DRINK && 
                  <SplideSlide key={String(dish.id)} >
                    <Dish data={dish}/>
                  </SplideSlide>
                ))
              }
          </Splide>
        </div>
      </main>
      <Footer />
    </Container>
  );
}