import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import styles from "./Player.module.css";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Player() {
  const [video, setVideo] = useState(null);
  const parametros = useParams();
  useEffect(() => {
    try {
      fetch(`https://my-json-server.typicode.com/basgomcesar/alura-cinema-api/videos?id=${parametros.id}`)
        .then((response) => response.json())
        .then((data) => setVideo(...data));
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }, []);
  //const video = videos.find((video) => video.id === Number(parametros.id)); //
  if(!video) return <NotFound />
  return (
    <>
      <Banner img="player" color="#58B9AE" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
