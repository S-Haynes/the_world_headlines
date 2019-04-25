import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styles from "./Region.css";

import Logo from "../Logo/Logo";
import BlackLogo from "../../assets/img/newslogo.png";
import CardList from "../Article/CardList/CardList";
import Headliner from "../Article/Headliner/Headliner";
import SideNewsList from "../Article/SideNewsList/SideNewsList";
import Subtitle from "../Element/Subtitle/Subtitle";
import Video from "../Video/Video";
import VideoList from "../Video/VideoList/VideoList";
import EditorNewsList from "../Article/EditorNewsList/EditorNewsList";

class Region extends Component {
  state = {
    articles: []
  };
  async componentDidMount() {
    const { region } = this.props.match.params;

    const res1Promise = axios.get(
      `https://newsapi.org/v2/top-headlines?country=${region}&${
        process.env.REACT_APP_API_KEY
      }`
    );

    const res1 = await res1Promise;

    const updatedArticles = res1.data.articles.filter(
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
      <Fragment>
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
                background: "#000",
                height: "2px",
                width: "100%",
                margin: "0 auto"
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
                margin: "30px auto",
                height: "2px"
              }}
            />
            <div className="row">
              {articles.length > 0 ? (
                <Fragment>
                  <div
                    className={`${
                      styles.SectionOne
                    } col-12 col-md-7 col-lg-8 row mr-2`}
                  >
                    <div className="col-12">
                      <Headliner article={articles[0]} />
                      <Subtitle title="More Headlines" />
                      <CardList articles={articles.slice(4, 10)} />
                      <Subtitle title="Editors' Pick" />
                      <EditorNewsList articles={articles.slice(11, 16)} />
                    </div>
                  </div>
                  <div
                    className={` ${styles.SideNews} col-12 col-md-5 col-lg-4`}
                  >
                    <SideNewsList articles={articles.slice(1, 4)} />
                    <Subtitle title="Video" />
                  </div>
                </Fragment>
              ) : null}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Region);
