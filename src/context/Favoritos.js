import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();//createContext crea un contexto de React para compartir datos que pueden considerarse “globales” para un árbol de componentes de React. Un contexto de React está diseñado para compartir datos que se pueden considerar “globales” para un árbol de componentes de React, como el usuario autenticado actual, el tema o el idioma preferido. Un ejemplo de su uso es el siguiente: const MyContext = React.createContext(defaultValue);. El argumento que se pasa a React.createContext es el valor predeterminado que se utilizará cuando un componente consumidor no tenga un proveedor correspondiente. El valor devuelto por React.createContext es un objeto con dos propiedades: Provider y Consumer. El Provider es un componente de React que permite a los componentes hijos suscribirse al contexto y recibir actualizaciones de los valores proporcionados por el Provider. El Consumer es un componente de React que permite a los componentes hijos suscribirse al contexto y recibir actualizaciones de los valores proporcionados por el Provider. El Provider y el Consumer deben coincidir en el mismo contexto para que el Consumer pueda recibir actualizaciones de valores. createContext devuelve un objeto con dos propiedades: Provider y Consumer. Provider es un componente de React que permite a los componentes hijos suscribirse al contexto y recibir actualizaciones de los valores proporcionados por el Provider. Consumer es un componente de React que permite a los componentes hijos suscribirse al contexto y recibir actualizaciones de los valores proporcionados por el Provider. createContext también tiene una propiedad llamada displayName que se puede usar para dar un nombre a un contexto, lo que puede ser útil para depurar en herramientas de desarrollo de React o en mensajes de error.

FavoritosContext.displayName = "Favoritos";//displayName es una propiedad que se puede usar para dar un nombre a un contexto, lo que puede ser útil para depurar en herramientas de desarrollo de React o en mensajes de error.

export default function FavoritoProvider({ children }) { //children es una propiedad especial que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen. Es una propiedad que se pasa a los componentes de React para que puedan representar cualquier contenido que deseen.
  const [favorito, setFavorito] = useState([]);
  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);
  function agregarFavorito(nuevoFavorito) {
    const favoritoRepetido = favorito.some(
      //el metodo some() devuelve true si al menos un elemento del array cumple con la condicion implementada por la funcion proporcionada
      (f) => f.id === nuevoFavorito.id //imageBitMap te permite manipular imagenes a nivel de pixel
    );
    let nuevaLista = [...favorito];
    if (!favoritoRepetido) {
      nuevaLista.push(nuevoFavorito);
      return setFavorito(nuevaLista);
    }
    nuevaLista = nuevaLista.filter((f) => f.id !== nuevoFavorito.id);
    return setFavorito(nuevaLista);
  }
  return { favorito, agregarFavorito };
}
