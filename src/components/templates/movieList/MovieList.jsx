import React from "react";
import PropTypes from "prop-types";

import { FullMovieList } from "../../organisms";
import { Content } from "antd/lib/layout/layout";
import { Typography } from "antd";

function MovieList({
    movieList,
    title,
}) {
  return (
    <Content>
      <div
        className="site-layout-background"
      >
        
        <Typography.Title
        level={2}
        style={{
            margin:'1.2rem'
        }}
      >
        {title}
      </Typography.Title>
        <div className="site-card-wrapper">
            <FullMovieList movieList={movieList}/>
        </div>
      </div>
    </Content>
  );
}

export default MovieList;
