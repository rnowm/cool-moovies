import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  allMoviesSelector,
  fetchingSelector,
} from "../selectors/allMoviesSelector";
import { item } from "../actions";

import { LoadingAnimation } from "../components/LoadingAnimation";
import {
  Grid,
  Content,
  MainWrapper,
  AppWrapper,
  Header,
  Thumbnail,
} from "../components/components";

export const HomeContainer = () => {
  const dispatch = useDispatch();
  const allMovies = useSelector(allMoviesSelector);
  const fetching = useSelector(fetchingSelector);

  useEffect(() => {
    dispatch(item.requestAllMovies());
  }, [dispatch]);

  return fetching ? (
    <LoadingAnimation />
  ) : (
    <AppWrapper>
      <MainWrapper>
        <Header logo />
        <Content>
          <Grid>
            {allMovies?.results?.map((movie) => (
              <Link key={movie.id} to={`details/${movie.id}`}>
                <Thumbnail movie={movie} />
              </Link>
            ))}
          </Grid>
        </Content>
      </MainWrapper>
    </AppWrapper>
  );
};
