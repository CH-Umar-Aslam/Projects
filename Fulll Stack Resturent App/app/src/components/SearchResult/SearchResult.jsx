import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <div>
    
        <FoodCardContainer>
         <Container>
          <FoodCards>
            {data?.map(({ name, image, price, text }) => (
              <Foodcard key={name}>
                <div className="images">
                  <img src={BASE_URL + image} alt="" />
                </div>
                <div className="food-info">
                  <div className="info">
                    <h3>{name}</h3>
                    <p>{text}</p>
                  </div>
                  <Button className="btn">${price.toFixed(2)}</Button>
                </div>
              </Foodcard>
            ))}
          </FoodCards> </Container>
        </FoodCardContainer>
     
    </div>
  );
};

export default SearchResult;


const FoodCardContainer = styled.section`
 min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
  .cont{

  }
`;
const FoodCards = styled.section`
display:flex;
padding-top:80px ;
justify-content: center;
align-items: center;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 22px;
`;
const Foodcard = styled.section`
  display: flex;
  padding: 12px;
  border-radius: 19px;
  border: 0.659px solid #697070;
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);
  width: 340px;
  height: 167px;
  flex-shrink: 0;
  &:hover {
    border: 0.659px solid #98f9ff;
  }
  .food-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
  .info h3 {
    font-size: 22px;
  }
  .info p {
    font-size: 12px;
  }
  .food-info .btn {
    font-size: 11px;
  }
`;