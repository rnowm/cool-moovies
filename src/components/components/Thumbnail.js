import React from "react";
import { Link } from "react-router-dom";

import { Column, Row } from "./Layout";
import { Label } from "./Typography";
import { Image } from "./Image";

export const Thumbnail = ({ movie }) => {
  return (
    <Link to={`details/${movie.id}`}>
      <Column center marginAll className="pointer">
        <Column fit center middle>
          <Image
            alt={movie.title}
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
          />
        </Column>
        <Row marginTop>
          <Label small color="gray" fade="0.7">
            {movie.title}
          </Label>
        </Row>
      </Column>
    </Link>
  );
};
