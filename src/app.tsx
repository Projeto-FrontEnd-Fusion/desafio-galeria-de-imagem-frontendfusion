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

  const { data: photo ,isLoading, error} = useQuery<photo[]>({ queryKey: ['photo'], queryFn: getPhotos })


  useEffect(() => {
    getFavorite()
  },[getFavorite])
  return (
    <>
      <Header setGallerySection={setGallerySection} gallerySection={gallerySection} />
      <main  className="pb-10">
        {gallerySection === "photos" ?(
          <PhotoGallery photos={photo ?? []} isLoading={isLoading} error={error}/> 
        )  
        :(
          <PhotoGallery photos={photos ?? []} isLoading={isLoading}/>  
        )}
      </main>
      <footer>
       <p className="text-center py-3 border-t">© {new Date().getFullYear()} Desafio da galera. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

