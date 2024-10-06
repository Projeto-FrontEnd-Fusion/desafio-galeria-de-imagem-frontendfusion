import { useQuery } from "@tanstack/react-query";
import { Header } from "./components/header";
import { PhotoGallery } from "./components/photo-gallery";
import { getPhotos } from "./http/photo";
import type { photo } from "./@types/photo";





export  function App() {

  const { data: photo ,isLoading} = useQuery<photo[]>({ queryKey: ['photo'], queryFn: getPhotos })

  return (
    <>
      <Header />
      <main >
        <PhotoGallery photos={photo ?? []} isLoading={isLoading}/> 

      </main>
    </>
  );
}

