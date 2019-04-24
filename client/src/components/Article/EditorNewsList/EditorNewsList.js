import React from "react";
import EditorNewsItem from "./EditorNewsItem/EditorNewsItem";

const EditorNewsList = ({ articles }) => {
  const content = articles.map(article => (
    <EditorNewsItem key={article.url} article={article} />
  ));

  return <div className="row">{content}</div>;
};

export default EditorNewsList;
