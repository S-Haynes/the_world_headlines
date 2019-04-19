import React from "react";

import styles from "./CardItem.css";

const CardItem = ({ article }) => {
  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer">
      <div className={`${styles.CardItem} col-sm-6 row ml-4`}>
        <img
          className="img-fluid col-5"
          src={article.urlToImage}
          alt="article"
          style={{ minHeight: "75%", maxHeight: "75%" }}
        />
        <h1 className="col-7">
          {article.title
            .split(" ")
            .slice(0, 5)
            .join(" ")}
          ...
        </h1>
      </div>
    </a>
  );
};

export default CardItem;
