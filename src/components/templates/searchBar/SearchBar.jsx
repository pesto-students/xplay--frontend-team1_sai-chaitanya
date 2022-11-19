import React from "react";
import PropTypes from "prop-types";

import { FullMovieList } from "../../organisms";
import { Content } from "antd/lib/layout/layout";
import { Typography ,Input, Space} from "antd";

const { Search } = Input;
function SearchBar({
    movieList,
    title,
}) {
  return (
    <Content>
      <div
        className="site-layout-background"
      >
        
        <Typography.Title
        level={3}
        style={{
            margin:'1.2rem'
        }}
      >
        {title}
      </Typography.Title>

      <Search
      placeholder="Enter Movie Title"
      style={{
        width: 200,
      }}
    />
        <div className="site-card-wrapper">
            <FullMovieList movieList={movieList}/>
        </div>
      </div>
    </Content>
  );
}

export default SearchBar;
