import React, { Fragment } from "react";
import CardItem from "./CardItem/CardItem";

const CardList = ({ articles }) => {
  const listContent = articles.map(article => (
    <CardItem key={article.url} article={article} />
  ));

  return (
    <Fragment>
      <div className="row">{listContent}</div>
      <hr
        style={{
          width: "100%",
          margin: "20px auto"
        }}
      />
    </Fragment>
  );
};

export default CardList;
