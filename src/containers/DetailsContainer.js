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
  Progress,
} from "../components/components";

import styled from "styled-components";

const Block = ({ title, children }) => (
  <Column marginTop>
    <Row marginBottom="5">
      <Label semibold large color="white">
        {title}
      </Label>
    </Row>
    <Label color="white">{children}</Label>
  </Column>
);

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
              <Row toColumn="tablet" bkg="purple" radius="8" marginAll>
                <Row noShrink>
                  <Thumbnail details movie={movie} />
                </Row>
                <Column color="white" marginAll="30">
                  <H1>{movie.title || movie.original_title || movie.name}</H1>

                  {movie.release_date && (
                    <Row marginTop="5">
                      <Label
                        small
                        color="white"
                      >{`(${movie.release_date})`}</Label>
                    </Row>
                  )}

                  {movie.vote_average && (
                    <Row marginTop>
                      <Progress autoColor value={movie.vote_average * 10} />
                    </Row>
                  )}

                  {movie.overview && (
                    <Row marginTop>
                      <Label large color="white">
                        {movie.overview}
                      </Label>
                    </Row>
                  )}

                  {movie.genres && (
                    <Block title="Genres:">
                      <Label color="white">
                        {movie.genres.map((g) => g.name).join(", ")}
                      </Label>
                    </Block>
                  )}

                  {movie.production_countries && (
                    <Block title="Countries:">
                      <Label color="white">
                        {movie.production_countries
                          .map((c) => c.name)
                          .join(", ")}
                      </Label>
                    </Block>
                  )}

                  {/* {movie.production_companies && (
                    <Row marginTop>
                      {movie.production_companies.map((pc) => (
                        <img
                          width="50"
                          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${pc.logo_path}`}
                          alt={pc.name}
                        />
                      ))}
                    </Row>
                  )} */}
                </Column>
              </Row>
            </Column>
          )}
        </Content>
      </MainWrapper>
    </AppWrapper>
  );
};
