import React from "react";
import styles from "./Headliner.css";

const Headliner = ({ article }) => {
  return (
    <div className={styles.Headliner}>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <h2>
          <b>{article.title}</b>
        </h2>
      </a>
      <p>{article.content}</p>

      {article.author !== null && article.author !== "" ? (
        <p>By {article.author}</p>
      ) : article.source.name !== null ? (
        <p style={{ fontSize: "14px" }}>By {article.source.name} </p>
      ) : null}
      <img
        style={{ maxHeight: "500px", minWidth: "100%" }}
        alt="article"
        src={article.urlToImage}
        className="img-fluid"
      />
      <hr
        style={{
          width: "100%",
          margin: "20px auto"
        }}
      />
    </div>
  );
};

export default Headliner;
