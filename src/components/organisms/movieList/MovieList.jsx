import React from "react";
import { Col, Row, Typography } from "antd";
import PropTypes from "prop-types";
import {Card} from '../../molecules';
import { Content } from "antd/lib/layout/layout";

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
        </div>
      </div>
    </Content>
    
  );
}

export default MovieList;
