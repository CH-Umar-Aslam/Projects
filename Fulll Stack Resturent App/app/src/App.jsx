import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [filterdData, setFilteredData] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBtn,setSelectedBtn]=useState("all");

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);

        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data from API");
      }
    };


    fetchFood();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue.toLowerCase === "") {
      setFilteredData(null);
    } else {
      const filter = data?.filter((food) =>
        food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filter);
    }
  };

  const filterBtn=[
    {
      name:"All",
      type:"all"
    },
    {
      name:"Breakfast",
      type:"breakfast"
    },
    {
      name:"Lunch",
      type:"lunch"
    },
    {
      name:"Dinner",
      type:"dinner"
    }
  ];
    const filterFood = (type) => {
      if (type === "all") {
        setFilteredData(data);
        setSelectedBtn("all");
        return;
      }
      const filter = data?.filter((food) =>
        food.type.toLowerCase().includes(type.toLowerCase())
      );
      setFilteredData(filter);
      setSelectedBtn(type);
    };



  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.... </div>;
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/FoodyZone.svg" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Food" />
          </div>
        </TopContainer>
        <FilterContainer>
          {filterBtn.map((value) => (
            <Button
             isselectd={selectedBtn === value.type}
            key={value.name} onClick={() => filterFood(value.type)}>
              {value.name}
             
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filterdData} />
    </>
  );
};

export default App;
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  padding: 16px;
  background-color: #323334;

  .search {
    input {
      height: 40px;
      background-color: transparent;
      border: 1px solid red;
      color: white;
      padding: 0 4px;
      border-radius: 5px;
      font-size: 16px;
      &::placeholder{
        color: white;
      }
    }
  }
  @media (0 < width < 620px ) {
    flex-direction: column;
    height: 120px;
    
  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
`;
export const Button = styled.button`
  background: ${({ isselectd }) => (isselectd ? "#bb1b1b " : "#ff0000")};
  outline: 0.5px solid ${({ isselectd }) => (isselectd ? "white" : "#ff0000")};

  color: white;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background: #ff0000;
  }
`;
