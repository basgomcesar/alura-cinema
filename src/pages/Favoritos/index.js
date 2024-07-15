import styles from "./Favoritos.module.css";
import { useFavoritoContext } from "../../context/Favoritos";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";

function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner img="favoritos" color="#44d97d" />
      <Titulo>
        <h1>Mis favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} id={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
