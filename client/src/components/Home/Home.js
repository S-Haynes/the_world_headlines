import React, { Component, Fragment } from "react";
import axios from "axios";

import Logo from "../Logo/Logo";
import BlackLogo from "../../assets/img/newslogo.png";
import styles from "./Home.css";

class Home extends Component {
  state = {
    articles: []
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=8ce29defa950488b8d3236546046bf4e"
    );

    const updatedArticles = res.data.articles.filter(
      article => (article.description || article.content) !== null
    );
    this.setState(prevState => ({
      articles: updatedArticles
    }));
  }

  render() {
    const date = Date(Date.now());
    const { articles } = this.state;

    return (
      <Fragment>
        <div style={{ marginTop: "40px" }} className="container text-center">
          <Logo img={BlackLogo} width="450px" />
        </div>
        <div className={`${styles.Container} container mt-4`}>
          <div className="row">
            <div className="col-4">{date.toString().slice(0, 15)}</div>
            <div className="col-4 text-center">
              <em>Democracy Dies in Darkness</em>
            </div>
            <div className="col-4 text-right">Edition: U.S. & World</div>
          </div>
          <hr
            style={{
              width: "100%",
              margin: "0 auto",
              background: "black",
              height: "2px"
            }}
          />
          <div
            style={{ width: "100%", marginTop: "10px" }}
            className="d-flex justify-content-between"
          >
            <p style={{ color: "#B25C5B" }}>In the News</p>
            {articles.length > 0
              ? articles.slice(0, 5).map(article => {
                  return (
                    <a
                      key={article.url}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {article.title
                        .split(" ")
                        .slice(0, 3)
                        .join(" ")}
                      ...
                    </a>
                  );
                })
              : null}
          </div>
          <hr
            style={{
              width: "100%",
              margin: "5px auto",
              height: "2px"
            }}
          />
          <hr
            style={{
              width: "100%",
              margin: "50px auto",
              height: "2px"
            }}
          />
          <div className="row">
            <div
              style={{ borderRight: "1px solid #ccc" }}
              className="col-12 col-md-6 col-lg-4"
            >
              {articles.length > 0 ? (
                <Fragment>
                  <a
                    href={articles[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>
                      <b>{articles[0].title}</b>
                    </h2>
                  </a>
                  <p>{articles[0].content}</p>
                </Fragment>
              ) : null}

              {articles.length > 0 && articles[0].author !== null ? (
                <p>{articles[0].author}</p>
              ) : articles.length > 0 && articles[0].author === null ? (
                <p style={{ fontSize: "14px" }}>
                  By {articles[0].source.name}{" "}
                </p>
              ) : null}

              {articles.length > 0 ? (
                <img
                  alt="article"
                  src={articles[0].urlToImage}
                  className="img-fluid"
                />
              ) : null}
            </div>
            <div
              style={{ borderRight: "1px solid #ccc" }}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="row">
                {articles.length > 0
                  ? articles.slice(1, 4).map(article => {
                      return (
                        <Fragment key={article.url}>
                          <div className="col-12">
                            <a
                              href={article.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <h5>
                                <b>{article.title}</b>
                              </h5>
                            </a>
                            <p>{article.content}</p>
                            {article.author !== null ? (
                              <p>By {article.author}</p>
                            ) : (
                              <p style={{ fontSize: "14px" }}>
                                By {article.source.name}
                              </p>
                            )}
                          </div>

                          <hr
                            style={{
                              width: "90%",
                              margin: "10px auto 20px auto"
                            }}
                          />
                        </Fragment>
                      );
                    })
                  : null}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">hi</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
