import { createContext, useEffect,  useState } from "react";
import PropTypes from "prop-types";



export const GalleryContext = createContext();


export const GalleryProvider = ({ children }) => {
 
  const [gallery, setGallery] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [favoritePhotoList, setFavoritePhotoList] = useState([]);
  const [filteredPhotosFromTheGallery, setFilteredPhotosFromTheGallery] =
    useState([]);
  const [favoriteFilteredPhotos, setFavoriteFilteredPhotos] = useState([]);
  const [activeFilterInTheGallery, setActiveFilterInTheGallery] =
    useState(false);
  const [activeFilterOnFavorites, setActiveFilterOnFavorites] = useState(false);
 

  useEffect(() => {
    async function GETGallery() {
      const url = await fetch("https://picsum.photos/v2/list");
      const urlConvert = await url.json();

      setGallery(urlConvert);
    }

    GETGallery();
  }, []);


 
 
  return (
    <GalleryContext.Provider
      value={{
        gallery,
        selectedPhoto,
        setSelectedPhoto,
        openModal,
        setOpenModal,
        favoritePhotoList,
        setFavoritePhotoList,
        setGallery,
        filteredPhotosFromTheGallery,
        setFilteredPhotosFromTheGallery,
        favoriteFilteredPhotos,
        setFavoriteFilteredPhotos,
        activeFilterInTheGallery,
        setActiveFilterInTheGallery,
        activeFilterOnFavorites,
        setActiveFilterOnFavorites,
       
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

GalleryProvider.propTypes = {
  children: PropTypes.element,
};
