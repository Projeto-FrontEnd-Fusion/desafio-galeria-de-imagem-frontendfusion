import { useContext, useEffect } from "react";
import { GalleryContext } from "../../context/Gallery";
import PropTypes from "prop-types";
import Button from "./Button";

export default function Card({ url, id, favorite = false }) {
  const {
    setSelectedPhoto,
    setOpenModal,
    setFavoritePhotoList,
    filteredPhotosFromTheGallery,
    setFilteredPhotosFromTheGallery,
    activeFilterInTheGallery,
    activeFilterOnFavorites,
    favoriteFilteredPhotos,
    setFavoriteFilteredPhotos,
    gallery,
    setGallery,
  } = useContext(GalleryContext);

  useEffect(() => {
    const favoriteList = gallery.filter((item) => item.favorite === true);
    setFavoritePhotoList(favoriteList);
  }, [gallery]);

  const capturePhotoToModal = () => {
    const itemLocated = gallery.find((item) => item.id === id);
    setSelectedPhoto(itemLocated);
    setOpenModal(true);
  };

  const likePhoto = (e) => {
    reactToPhoto(e);
  };

  const dislikePhoto = (e) => {
    reactToPhoto(e);
  };

  function reactToPhoto(e) {
    const targetId = e.target.parentNode.id;

    if (activeFilterInTheGallery) {
      const updatedGallery = filteredPhotosFromTheGallery.map((item) => {
        if (item.id === targetId) {
          switch (item.favorite) {
            case true:
              return { ...item, favorite: false };
            default:
              return { ...item, favorite: true };
          }
        } else {
          return item;
        }
      });

      setFilteredPhotosFromTheGallery(updatedGallery);
      setGallery(updatedGallery);
    }

    if (activeFilterOnFavorites) {
      const UpdatedFavoritesGallery = favoriteFilteredPhotos.map((item) => {
        if (item.id === targetId) {
          switch (item.favorite) {
            case true:
              return { ...item, favorite: false };
            default:
              return { ...item, favorite: true };
          }
        } else {
          return item;
        }
      });

      setFavoriteFilteredPhotos(UpdatedFavoritesGallery);
      setGallery(UpdatedFavoritesGallery);
    }

    const updatedGallery = gallery.map((item) => {
      if (item.id === targetId) {
        switch (item.favorite) {
          case true:
            return { ...item, favorite: false };
          default:
            return { ...item, favorite: true };
        }
      } else {
        return item;
      }
    });

    setGallery(updatedGallery);
  }

  return (
    <div
      className="h-344 w-275 rounded-lg shadow-lg shadow-indigo-500/40 relative hover:-translate-y-6 duration-700 cursor-pointer overflow-hidden shrink-0"
      id={id}
    >
      <img
        src={url}
        alt="Sem texto alternativo"
        className="h-full w-full"
        onClick={capturePhotoToModal}
      />

      {favorite === true ? (
        <Button func={dislikePhoto} />
      ) : (
        <Button func={likePhoto} like={true} />
      )}
    </div>
  );
}

Card.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
  favorite: PropTypes.bool,
};
