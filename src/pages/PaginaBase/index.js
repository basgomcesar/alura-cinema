import { Outlet } from "react-router-dom";
import Cabecera from "../../components/Cabecera/Cabecera";
import Container from "../../components/Container";
import FavoritoProvider from "../../context/Favoritos";
import Pie from "../../components/Pie";

function PaginaBase(){
    return(<main>
        <Cabecera />
        <FavoritoProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritoProvider>
        <Pie />
    </main>);
}

export default PaginaBase;