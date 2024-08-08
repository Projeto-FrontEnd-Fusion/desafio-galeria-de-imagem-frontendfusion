import { useContext } from "react";
import { GalleryContext } from "../../../context/Gallery";
import PropTypes from "prop-types";
import authors from "./data.json";

export default function FilterContainer({ mainCarousel }) {
  const {
    gallery,
    setFilteredPhotosFromTheGallery,
    setFavoriteFilteredPhotos,
    favoritePhotoList,
    setActiveFilterInTheGallery,
    setActiveFilterOnFavorites,
  } = useContext(GalleryContext);




  const filterByAuthors = (e) => {
    const authorId = e.target.id;

    if (mainCarousel) {
      switch (authorId) {
        case "Alejandro Escamilla":
          processFilter("Alejandro Escamilla");

          break;
        case "Paul Jarvis":
          processFilter("Paul Jarvis");

          break;
        case "Vadim Sherbakov":
          processFilter("Vadim Sherbakov");

          break;
        case "Yoni Kaplan-Nadel":
          processFilter("Yoni Kaplan-Nadel");

          break;
        case "Jerry Adney":
          processFilter("Jerry Adney");

          break;
        case "Go Wild":
          processFilter("Go Wild");

          break;
        case "Aleks Dorohovich":
          processFilter("Aleks Dorohovich");

          break;

        default:
          setFilteredPhotosFromTheGallery([]);
          setActiveFilterInTheGallery(false);
          setActiveFilterOnFavorites(false);
          break;
      }
    }

    if (mainCarousel !== true) {
      switch (authorId) {
        case "Alejandro Escamilla":
          processFilter("Alejandro Escamilla");

          break;
        case "Paul Jarvis":
          processFilter("Paul Jarvis");

          break;
        case "Vadim Sherbakov":
          processFilter("Vadim Sherbakov");

          break;
        case "Yoni Kaplan-Nadel":
          processFilter("Yoni Kaplan-Nadel");

          break;
        case "Jerry Adney":
          processFilter("Jerry Adney");

          break;
        case "Go Wild":
          processFilter("Go Wild");

          break;

        case "Aleks Dorohovich":
          processFilter("Aleks Dorohovich");

          break;

        default:
          setFavoriteFilteredPhotos([]);
          setActiveFilterOnFavorites(false);
          setActiveFilterInTheGallery(false);
          break;
      }
    }
  };

  const processFilter = (authorName) => {
    let filterCarriedOut = [];
    if (mainCarousel) {
      filterCarriedOut = gallery.filter((item) => item.author === authorName);

      if (filterCarriedOut.length === 0) {
        return alert("Nenhum autor localizado com esse nome.");
      }

      setFilteredPhotosFromTheGallery(filterCarriedOut);
      setActiveFilterInTheGallery(true);
      setActiveFilterOnFavorites(false);

      return;
    }

    filterCarriedOut = favoritePhotoList.filter(
      (item) => item.author === authorName
    );

    if (filterCarriedOut.length === 0) {
      return alert("Nenhum autor localizado com esse nome.");
    }

    setFavoriteFilteredPhotos(filterCarriedOut);
    setActiveFilterOnFavorites(true);
    setActiveFilterInTheGallery(false);
  };

  return (
    <div className="pl-6 text-white mb-4">
      <h3>Filtro por autores:</h3>
      <div className="mt-4 flex gap-4 flex-wrap">
        {authors.map((item) => {
          return (
            <button
              key={item.id}
              className="bg-indigo-500 p-2 rounded hover:bg-indigo-800 transition ease-in-out cursor-pointer"
              id={item.author}
              onClick={filterByAuthors}
            >
              {item.author}
            </button>
          );
        })}
        <button
          className="bg-indigo-500 p-2 rounded hover:bg-indigo-800 transition ease-in-out cursor-pointer"
          id="todos"
          onClick={filterByAuthors}
        >
          todos
        </button>
      </div>
    </div>
  );
}

FilterContainer.propTypes = {
  mainCarousel: PropTypes.bool,
};
