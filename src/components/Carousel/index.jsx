import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Dish } from "../Dish";

export function Carousel({title, children,...rest}){
  return (
    <Container>
      <h2>{title}</h2>
      <Splide>
        {
          children && <></
        }
      </Splide>
    </Container>
  )
}