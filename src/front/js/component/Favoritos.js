import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PhotoCard } from "./PhotoCard";

export const Favoritos = ({ favorites }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <h1>Mis Fotos Favoritas</h1>
      <div className="mobile-column tablet-column d-flex justify-content-between">
        {favorites.map((fav, index) => (
          <div key={index} className="">
            {/* Pasa la URL de la imagen del favorito al componente PhotoCard */}
            <PhotoCard
              photo={fav.photo}
              name={fav.name}
              index={fav.index}
              likes={fav.likes}
              favorites={fav.favorites}
              photoUrl={fav.photoUrl} // Nueva prop para la URL de la imagen
              // Pasa el contador local
              favoriteCount={store.cardFavorites[fav.index] || 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
