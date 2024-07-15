import { Link } from "react-router-dom";
import { useFavoritoContext } from "../../context/Favoritos";
import styles from "./Card.module.css";
import iconFavorito from "./iconoFavorito.png";
import iconNoFavorito from "./iconoNoFavorito.png";

function Card({ id, capa, titulo }) {
  const { favorito, agregarFavorito } = useFavoritoContext();
  const esFavorito = favorito.some((f) => f.id === id);
  const icono = esFavorito ? iconFavorito : iconNoFavorito;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icono}
        alt="Icono favorito"
        onClick={() => agregarFavorito({ id, titulo, capa })}
        className={styles.favorito}
      />
    </div>
  );
}

export default Card;
