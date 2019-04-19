import React from "react";
import SideNewsItem from "./SideNewsItem/SideNewsItem";

const SideNewsList = ({ articles }) => {
  const listContent = articles.map(article => (
    <SideNewsItem key={article.url} article={article} />
  ));
  return <div className="row">{listContent}</div>;
};

export default SideNewsList;
