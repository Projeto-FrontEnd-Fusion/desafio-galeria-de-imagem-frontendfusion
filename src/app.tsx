import { useQuery } from "@tanstack/react-query";
import { Header } from "./components/header";
import { PhotoGallery } from "./components/photo-gallery";
import { getPhotos } from "./http/photo";
import type { photo } from "./@types/photo";
import { useStore } from "./store/zustand";
import { useEffect, useState } from "react";
import type { GallerySection } from "./@types/gallery-section";





export  function App() {
  const [gallerySection, setGallerySection] = useState<GallerySection>('photos')
  const getFavorite = useStore((state) => state.getFavorite);
  const photos = useStore(store => store.photos)

  const { data: photo ,isLoading} = useQuery<photo[]>({ queryKey: ['photo'], queryFn: getPhotos })


  useEffect(() => {
    getFavorite()
  },[getFavorite])
  return (
    <>
      <Header setGallerySection={setGallerySection} gallerySection={gallerySection} />
      <main >
       
        {gallerySection === "photos" ?  <PhotoGallery photos={photo ?? []} isLoading={isLoading}/> :  <PhotoGallery photos={photos ?? []} isLoading={isLoading}/>  }
      </main>
    </>
  );
}

