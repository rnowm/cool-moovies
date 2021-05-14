import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { moviesSelector, fetchingSelector } from "../selectors/moviesSelector";
import { item } from "../actions";
import { LoadingAnimation } from "../components/LoadingAnimation";
import {
  Grid,
  Content,
  FixedWrapper,
  MainWrapper,
  AppWrapper,
  Column,
  Row,
  Header,
  Thumbnail,
} from "../components/components";

export const HomeContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);
  const fetching = useSelector(fetchingSelector);

  useEffect(() => {
    dispatch(item.requestAllMovies("1"));
  }, [dispatch]);

  return fetching ? (
    <LoadingAnimation />
  ) : (
    <AppWrapper>
      <MainWrapper>
        <Header title />
        <Content>
          <Grid>
            {movies?.results?.map((movie) => (
              <Thumbnail key={movie.id} movie={movie}></Thumbnail>
            ))}
          </Grid>
        </Content>
      </MainWrapper>
    </AppWrapper>
  );
};
