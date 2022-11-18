import React from "react";
import { Col, Row } from "antd";
import PropTypes from "prop-types";
import { Card } from "../../molecules";

function FullMovieList({ movieList }) {
  return (
    <Row>
      {movieList?.map((movie, index) => (
        <Col xs={16} sm={12} md={12} lg={8} xl={6} xxl={4} style={{padding:0}}>
          <Card
            coverImage={{
              alt: movie?.alt,
              source: movie?.source,
            }}
            key={index}
          />
        </Col>
      ))}
    </Row>
  );
}

export default FullMovieList;
