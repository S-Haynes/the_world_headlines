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
      `https://newsapi.org/v2/top-headlines?country=us&${
        process.env.REACT_APP_API_KEY
      }`
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
      <div className="animated fadeIn">
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
            <div className={`${styles.Headliner} col-12 col-md-6 col-lg-4`}>
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

              {articles.length > 0 &&
              articles[0].author !== null &&
              articles[0].author !== "" ? (
                <p>By {articles[0].author}</p>
              ) : articles.length > 0 && articles[0].source.name !== null ? (
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

              <hr
                style={{
                  width: "100%",
                  margin: "20px auto"
                }}
              />
            </div>
            <div className={`${styles.Midnews} col-12 col-md-6 col-lg-4`}>
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
                            {article.author !== null &&
                            article.author !== "" ? (
                              <p>By {article.author}</p>
                            ) : article.source.name !== null ? (
                              <p style={{ fontSize: "14px" }}>
                                By {article.source.name}
                              </p>
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
                    })
                  : null}
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <p>
                <b>More Headlines</b>
              </p>
              <hr
                style={{
                  width: "15px",
                  height: "2px",
                  background: "#000",
                  marginLeft: "35px",
                  marginTop: "-10px"
                }}
              />

              <div className="row">
                {articles.length > 0
                  ? articles.slice(4, 10).map(article => (
                      <a
                        key={article.url}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={`${styles.Card} col-12 row ml-4`}>
                          <img
                            className="img-fluid col-4"
                            src={article.urlToImage}
                            alt="article"
                            style={{ minHeight: "75%", maxHeight: "75%" }}
                          />
                          <h1 className="col-8">
                            {article.title
                              .split(" ")
                              .slice(0, 5)
                              .join(" ")}
                            ...
                          </h1>
                        </div>
                      </a>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
