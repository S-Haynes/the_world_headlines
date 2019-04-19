import React from "react";
import CardItem from "./CardItem/CardItem";

const CardList = ({ articles }) => {
  const listContent = articles.map(article => (
    <CardItem key={article.url} article={article} />
  ));

  return <div className="row">{listContent}</div>;
};

export default CardList;
