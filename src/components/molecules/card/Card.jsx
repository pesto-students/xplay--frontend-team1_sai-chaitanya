import React from "react";
import PropTypes from "prop-types";
import { Card as AntdCard, Image } from "antd";

import styles from "./card.module.scss";

function Card({ coverImage, cardStyles, onClick }) {
  return (
    <AntdCard
      bodyStyle={{ padding: 0 }}
      bordered={false}
      hoverable
      onClick={onClick}
      style={cardStyles}
    >
      <Image
        alt={coverImage?.alt}
        className={styles.imageStyle}
        preview={false}
        src={coverImage?.source}
      />
    </AntdCard>
  );
}

Card.propTypes = {
  coverImage: PropTypes.shape({
    alt: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
  cardStyles: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardStyles: {
    borderRadius: "1rem",
    margin: "1.2rem",
  },
};

export default Card;
