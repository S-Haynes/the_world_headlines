import React, { Component, Fragment } from "react";
import axios from "axios";
import styles from "./Home.css";

import Logo from "../Logo/Logo";
import BlackLogo from "../../assets/img/newslogo.png";
import CardList from "../Article/CardList/CardList";
import Headliner from "../Article/Headliner/Headliner";
import SideNewsList from "../Article/SideNewsList/SideNewsList";

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
      article => (article.description && article.content) !== null
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
            {articles.length > 0 ? (
              <Fragment>
                <Headliner article={articles[0]} />
                <div className={`${styles.Midnews} col-12 col-md-6 col-lg-4`}>
                  <SideNewsList articles={articles.slice(1, 4)} />
                </div>
                <div className="col-md-12 col-lg-4">
                  <hr
                    style={{
                      width: "35px",
                      height: "3px",
                      background: "#000",
                      marginBottom: "2%"
                    }}
                  />
                  <p>
                    <b>More Headlines</b>
                  </p>
                  <CardList articles={articles.slice(4, 10)} />
                </div>
              </Fragment>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
