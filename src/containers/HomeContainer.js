import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  allMoviesSelector,
  fetchingSelector,
} from "../selectors/allMoviesSelector";
import { item } from "../actions";

import {
  Grid,
  Content,
  MainWrapper,
  AppWrapper,
  Header,
  Thumbnail,
} from "cmr-components";

export const HomeContainer = () => {
  const dispatch = useDispatch();
  const allMovies = useSelector(allMoviesSelector);
  const fetching = useSelector(fetchingSelector);

  useEffect(() => {
    dispatch(item.requestAllMovies());
  }, [dispatch]);

  return (
    <AppWrapper>
      <MainWrapper>
        <Header logo title="Trending this week" />
        <Content>
          {!fetching && (
            <Grid>
              {allMovies?.results?.map((movie) => (
                <Link key={movie.id} to={`details/${movie.id}`}>
                  <Thumbnail movie={movie} />
                </Link>
              ))}
            </Grid>
          )}
        </Content>
      </MainWrapper>
    </AppWrapper>
  );
};
