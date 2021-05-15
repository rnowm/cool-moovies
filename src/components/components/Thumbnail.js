import React from "react";

import { Color } from "../utils/variables";

import { Column, Row } from "./Layout";
import { Label } from "./Typography";
import { Rate } from "./Progress";

import styled from "styled-components";

const Title = styled(Row)`
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  min-height: 50px;
  align-items: center;
  margin-bottom: 10px;
`;

const ThumbnailWrapper = styled(Column)`
  ${(props) =>
    !props.details &&
    `
      background-color: white;
      transition: all 0.2s ease;
      
      &:hover {
        background-color: ${Color("gray", "0.3")};
        transform: scale(1.05);
        box-shadow: 0px 10px 15px rgba(0, 2, 0, 0.25);
        
        ${Title} {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
  `};
`;

const Image = ({ movie }) => (
  <Column fit center middle>
    {movie.backdrop_path ? (
      <img
        width="220px"
        height="330px"
        alt={movie.title || movie.original_title || movie.name}
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
      />
    ) : (
      <Column randomBkg fade="0.6">
        <img
          width="220px"
          height="330px"
          alt={movie.title || movie.original_title || movie.name}
          src={
            "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTI4LjIgMTIwLjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOC4yIDEyMC4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTExMS44LDU5LjFjLTAuMy0wLjUtMC43LTAuOC0xLjItMC45bC05LjgtMi41Yy0xLjEtMC4zLTIuMiwwLjQtMi40LDEuNWwtMi4yLDguOUw4Ny43LDY0YzAsMCwwLDAsMCwwbC0wLjQtMC4xICAgYy0wLjUtMC4xLTEuMSwwLTEuNSwwLjJjLTAuNSwwLjMtMC44LDAuNy0wLjksMS4ybC0yLjIsOC45bC04LjktMi4yYy0xLjEtMC4zLTIuMiwwLjQtMi40LDEuNUw2OSw4Mi4zbC04LjktMi4yICAgYy0wLjUtMC4xLTEuMSwwLTEuNSwwLjJjLTAuNSwwLjMtMC44LDAuNy0wLjksMS4ybC0wLjIsMC44YzAsMCwwLDAsMCwwbC0yLjMsOS40Yy0wLjMsMS4xLDAuNCwyLjIsMS41LDIuNGwzOC44LDkuNyAgIGMwLjUsMC4xLDAuOSwwLjIsMS40LDAuMmMyLjUsMCw0LjgtMS43LDUuNC00LjJsOS44LTM5LjJDMTEyLjIsNjAuMSwxMTIuMSw1OS42LDExMS44LDU5LjF6IE03NC43LDc2LjNsOC43LDIuMiAgIGMwLjUsMC4yLDEuMiwwLjEsMS43LTAuMmMwLjUtMC4zLDAuOS0wLjksMC45LTEuNWwxLjctNi45bDUuNiw3LjRsLTIuOCwxMS4ybC0xNy44LTQuNUw3NC43LDc2LjN6IE05OC40LDk4LjggICBjLTAuMiwwLjktMS4xLDEuNC0xLjksMS4ybC0zNi45LTkuMmwxLjQtNS41bDMwLjYsNy43YzAuMSwwLDAuMywwLjEsMC40LDAuMWMwLDAsMCwwLDAsMGMwLDAsMC4xLDAsMC4xLDBjMC4xLDAsMC4yLDAsMC40LTAuMSAgIGMwLDAsMC4xLDAsMC4xLDBjMC4yLDAsMC4zLTAuMSwwLjQtMC4yYzAuNS0wLjMsMC44LTAuNywwLjktMS4ybDMuNS0xNC4xYzAuMS0wLjYsMC0xLjItMC4zLTEuN2wtNC45LTYuNGw0LjgsMS4yICAgYzEuMSwwLjMsMi4yLTAuNCwyLjQtMS41bDIuMi04LjlsNiwxLjVMOTguNCw5OC44eiI+PC9wYXRoPjxwYXRoIGQ9Ik01Ny41LDc1LjljMS4xLDAsMi0wLjksMi0ybDAtOS4yaDkuMWMxLjEsMCwyLTAuOSwyLTJ2LTkuMWg5LjFjMS4xLDAsMi0wLjksMi0ybDAtOS4yaDguMmMxLjEsMCwyLTAuOSwyLTJWMjIuNyAgIGMwLTMuMS0yLjUtNS42LTUuNi01LjZIMjIuNmMtMy4xLDAtNS42LDIuNS01LjYsNS42djU4LjJjMCwzLjEsMi41LDUuNiw1LjYsNS42aDIzLjdjMS4xLDAsMi0wLjksMi0ydi04LjVMNTcuNSw3NS45eiBNNjYuNiw2MC43ICAgaC05LjFjLTEuMSwwLTIsMC45LTIsMmwwLDkuMmwtMjQuNywwbDAtNi4xbDcuOC01LjlsNi44LDMuOWMwLjgsMC40LDEuNywwLjMsMi40LTAuM2wxNC45LTE0LjRsMy45LDMuMVY2MC43eiBNNDQuMyw4Mi40SDIyLjYgICBjLTAuOSwwLTEuNi0wLjctMS42LTEuNlYyMi43YzAtMC45LDAuNy0xLjYsMS42LTEuNmg2My43YzAuOSwwLDEuNiwwLjcsMS42LDEuNnYxNS44aC04LjFjLTEuMSwwLTIsMC45LTIsMmwwLDkuMmgtOGwtNS45LTQuNyAgIGMtMC44LTAuNi0xLjktMC42LTIuNiwwLjFMNDYuMSw1OS42bC02LjYtMy44Yy0wLjctMC40LTEuNi0wLjQtMi4yLDAuMWwtOS43LDcuM2MtMC41LDAuNC0wLjgsMS0wLjgsMS42bDAsOS4xYzAsMCwwLDAsMCwwbDAsMC4xICAgYzAsMC41LDAuMiwxLDAuNiwxLjRjMC40LDAuNCwwLjksMC42LDEuNCwwLjZoMTUuNVY4Mi40eiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNy4zLDQ3LjRjNSwwLDktNC4xLDktOWMwLTUtNC4xLTktOS05Yy01LDAtOSw0LjEtOSw5QzI4LjIsNDMuMywzMi4zLDQ3LjQsMzcuMyw0Ny40eiBNMzcuMywzMy4zYzIuOCwwLDUsMi4zLDUsNSAgIGMwLDIuOC0yLjMsNS01LDVjLTIuOCwwLTUtMi4zLTUtNUMzMi4yLDM1LjUsMzQuNSwzMy4zLDM3LjMsMzMuM3oiPjwvcGF0aD48L2c+PC9zdmc+"
          }
        />
      </Column>
    )}
  </Column>
);

export const Thumbnail = ({ movie, details }) => (
  <ThumbnailWrapper
    center
    marginAll
    className={details ? "" : "pointer"}
    radius="8"
    paddingAll="10"
    relative
    details={details}
  >
    <Column radius="8">
      <Image movie={movie} />
    </Column>

    {!details && (
      <>
        <Title center>
          <Label bold color="gray" fade="0.9" center>
            {movie.title || movie.original_title || movie.name}
          </Label>
        </Title>
        {(movie.vote_average || movie.vote_average === 0) && (
          <Rate autoColor value={movie.vote_average} />
        )}
      </>
    )}
  </ThumbnailWrapper>
);
