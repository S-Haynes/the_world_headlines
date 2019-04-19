import React, { Fragment } from "react";

const SideNewsItem = ({ article }) => {
  return (
    <Fragment>
      <div className="col-12">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h5>
            <b>{article.title}</b>
          </h5>
        </a>
        <p>{article.content}</p>
        {article.author !== null && article.author !== "" ? (
          <p>By {article.author}</p>
        ) : article.source.name !== null ? (
          <p style={{ fontSize: "14px" }}>By {article.source.name}</p>
        ) : null}
      </div>

      <hr
        style={{
          width: "90%",
          margin: "10px auto 20px auto"
        }}
      />
    </Fragment>
  );
};

export default SideNewsItem;
