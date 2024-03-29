import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";
import  {BsYoutube } from "react-icons/bs";
import "./videos.css";
const Videos = () => {
  const [videos, setVideos] = useState([]);

  const getDataSettings = async () => {
    try {
      const videosData = await firestoreFetchSetting("/videos/");
      setVideos(() => videosData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDataSettings().then(() => {});
  }, []);

  return (
    <article className="videos-article">
      <h2>Videos</h2>
        <a href="https://www.youtube.com/@poemasnadamas" className="" target="_blank" rel="noreferrer">
          <Button variant="danger" ><BsYoutube/> YouTube</Button>
          </a>
      <div className="videos-container">
        {videos.map((video) => {
          return (
            <section key={video.id} className="video-section">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.link}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <h4>{video.nombre}</h4>
            </section>
          );
        })}
      </div>
    </article>
  );
};

export default Videos;
