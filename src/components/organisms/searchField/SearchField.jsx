import React from "react";
import { Button, Col, Row, Typography } from "antd";
import PropTypes from "prop-types";
import {Card} from '../../molecules';
import { Content } from "antd/lib/layout/layout";
import Search from "antd/lib/transfer/search";

function SearchField({ 
  movieList,
  title,
  result,
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
      <div>
      <Search
      placeholder="Enter Movie Title"
      allowClear
      style={{
        width: '50px',
        marginLeft:'100px'
      }}

    />
    <Button type="primary">Search</Button>
    </div>
    <Typography.Title
        level={3}
        style={{
            margin:'1.2rem'
        }}
      >
        {result}
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

export default SearchField;
