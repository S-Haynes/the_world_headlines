import React from "react";
import styles from "./EditorNewsItem.css";

const EditorNewsItem = ({ article, imgClasses, textClasses }) => {
  return (
    <div className={`${styles.Article} col-12 row`}>
      <img
        style={{ minHeight: "150px", maxHeight: "200px" }}
        className={imgClasses}
        src={article.urlToImage}
        alt="article"
      />
      <div className={textClasses}>
        <a
          className="col-12"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>{article.title}</h1>
        </a>
        <p className="col-12">
          {article.description
            .split(" ")
            .slice(0, 20)
            .join(" ")}
          ...
        </p>
      </div>
      <hr style={{ width: "100%" }} />
    </div>
  );
};

export default EditorNewsItem;
