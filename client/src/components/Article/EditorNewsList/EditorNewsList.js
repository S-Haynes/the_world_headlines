import React from "react";
import EditorNewsItem from "./EditorNewsItem/EditorNewsItem";

const EditorNewsList = ({ articles, textClasses, imgClasses }) => {
  const content = articles.map(article => (
    <EditorNewsItem
      textClasses={textClasses}
      imgClasses={imgClasses}
      key={article.url}
      article={article}
    />
  ));

  return <div className="row">{content}</div>;
};

export default EditorNewsList;
