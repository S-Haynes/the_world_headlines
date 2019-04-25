import React, { Component, Fragment } from "react";
import axios from "axios";
import styles from "./Home.css";

import Logo from "../Logo/Logo";
import BlackLogo from "../../assets/img/newslogo.png";
import CardList from "../Article/CardList/CardList";
import Headliner from "../Article/Headliner/Headliner";
import SideNewsList from "../Article/SideNewsList/SideNewsList";
import Subtitle from "../Element/Subtitle/Subtitle";
import Video from "../Video/Video";
import VideoList from "../Video/VideoList/VideoList";
import EditorNewsList from "../Article/EditorNewsList/EditorNewsList";

class Home extends Component {
  state = {
    articles: [],
    video_articles: [],
    currentVideo: ""
  };

  async componentDidMount() {
    const res1Promise = axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&${
        process.env.REACT_APP_API_KEY
      }`
    );

    const res2Promise = axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHd62-u_v4DvJ8TCFtpi4GA&maxResults=6&order=date&type=video&key=${
        process.env.REACT_APP_YOUTUBE_KEY
      }
      `
    );

    const res1 = await res1Promise;
    const res2 = await res2Promise;

    const updatedVideos = res2.data.items.map(video => {
      return {
        ...video,
        url: `https://www.youtube.com/embed/${video.id.videoId}`
      };
    });

    const updatedArticles = res1.data.articles.filter(
      article => (article.description && article.content) !== null
    );

    this.setState(prevState => ({
      articles: updatedArticles,
      video_articles: updatedVideos,
      currentVideo: updatedVideos[0].url
    }));
  }

  videoClickHandler = url => {
    this.setState(prevState => ({
      currentVideo: `${url}?&autoplay=1`
    }));
  };

  render() {
    const date = Date(Date.now());
    const { articles, video_articles, currentVideo } = this.state;

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
            {articles.length > 0 && video_articles.length > 0 ? (
              <Fragment>
                <div
                  className={`${
                    styles.SectionOne
                  } col-12 col-md-7 col-lg-8 row mr-2`}
                >
                  <div className="col-12">
                    <Headliner article={articles[0]} />
                    <Subtitle title="More Headlines" />
                    <CardList
                      col="col-12 col-lg-6"
                      articles={articles.slice(4, 10)}
                    />
                    <Subtitle title="Editors' Pick" />
                    <EditorNewsList articles={articles.slice(11, 16)} />
                  </div>
                </div>
                <div className={` ${styles.SideNews} col-12 col-md-5 col-lg-4`}>
                  <SideNewsList articles={articles.slice(1, 4)} />
                  <Subtitle title="Video" />
                  <div className="row">
                    <div className="col-12">
                      <Video currentVideo={currentVideo} />
                    </div>
                    <VideoList
                      videoClickHandler={this.videoClickHandler}
                      videos={video_articles.slice(1)}
                    />
                  </div>
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
