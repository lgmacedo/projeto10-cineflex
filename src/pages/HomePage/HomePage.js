import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Movie from "../../components/Movie";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');
    promise.then(response => setMovies(response.data));
  }, [])

  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {movies.map((filme) => (
          <Movie imagemPoster={filme.posterURL} />
        ))}
      </ListContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-top: 70px;
`;
const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;
