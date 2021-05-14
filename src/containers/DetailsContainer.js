import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieSelector, fetchingSelector } from "../selectors/movieSelector";
import { item } from "../actions";

import { LoadingAnimation } from "../components/LoadingAnimation";
import {
  Content,
  MainWrapper,
  AppWrapper,
  Header,
  Thumbnail,
  H1,
  Label,
  Column,
  Row,
} from "../components/components";

export const DetailsContainer = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();

  const movie = useSelector(movieSelector);
  const fetching = useSelector(fetchingSelector);

  useEffect(() => {
    dispatch(item.requestMovieDetails(movieId));
  }, [dispatch]);

  return fetching ? (
    <LoadingAnimation />
  ) : (
    <AppWrapper>
      <MainWrapper>
        <Header logo back />
        <Content fit>
          {movie && (
            <Column stretch>
              <Row bkg="blue" expand>
                <Thumbnail details movie={movie} />
                <Column color="white" marginTop="30" marginLeft="10">
                  <H1>{movie.title || movie.original_title || movie.name}</H1>
                  <Row marginTop>
                    <Label color="white">
                      ...more content from the api here
                    </Label>
                  </Row>
                </Column>
              </Row>
            </Column>
          )}
        </Content>
      </MainWrapper>
    </AppWrapper>
  );
};
