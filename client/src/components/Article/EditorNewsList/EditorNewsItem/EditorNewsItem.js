import React from "react";
import styles from "./EditorNewsItem.css";

const EditorNewsItem = ({ article }) => {
  return (
    <div className={`${styles.Article} col-12 row`}>
      <img
        style={{ minHeight: "75%", maxHeight: "75%" }}
        className="img-fluid col-sm-12 col-lg-4"
        src={article.urlToImage}
        alt="article"
      />
      <div className="col-sm-12 col-lg-8 row">
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
