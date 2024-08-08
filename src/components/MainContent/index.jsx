import { useContext } from "react";
import { Carousel, Card } from "../index";
import { GalleryContext } from "../../context/Gallery";

export default function MainContent() {
  const {
    favoritePhotoList,
    filteredPhotosFromTheGallery,
    favoriteFilteredPhotos,
    gallery,
  } = useContext(GalleryContext);

  return (
    <main
      className={`w-screen py-12 gap-20 flex flex-col justify-center items-center bg-black-1  ${
        favoritePhotoList.length === 0 ? "h-screen" : ""
      }`}
    >
      <Carousel title="Galeria" mainCarousel={true}>
        {filteredPhotosFromTheGallery.length === 0
          ? gallery.map((item) => {
              return (
                <Card
                  key={item.id}
                  url={item.download_url}
                  id={item.id}
                  favorite={item.favorite}
                />
              );
            })
          : filteredPhotosFromTheGallery.map((item) => {
              return (
                <Card
                  key={item.id}
                  url={item.download_url}
                  id={item.id}
                  favorite={item.favorite}
                />
              );
            })}
      </Carousel>

      {favoritePhotoList.length === 0 ? null : (
        <Carousel title="Imagens Favoritas">
          {favoriteFilteredPhotos.length === 0
            ? favoritePhotoList.map((item) => {
                return (
                  <Card
                    key={item.id}
                    url={item.download_url}
                    id={item.id}
                    favorite={item.favorite}
                  />
                );
              })
            : favoriteFilteredPhotos.map((item) => {
                return (
                  <Card
                    key={item.id}
                    url={item.download_url}
                    id={item.id}
                    favorite={item.favorite}
                  />
                );
              })}
        </Carousel>
      )}
    </main>
  );
}
