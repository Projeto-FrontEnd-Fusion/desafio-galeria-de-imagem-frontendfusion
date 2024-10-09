import * as Dialog from "@radix-ui/react-dialog";
import type { photo } from "../@types/photo"
import { SkeletonPhoto } from "./skeleton"
import { PhotoModal } from "./photo-modal";

interface PhotoGalleryProps {
  photos: photo[]
  isLoading: boolean
}

export function PhotoGallery({ photos ,isLoading} : PhotoGalleryProps) {
  return (
    <>
    {photos.length === 0 ? (
        <p className="text-2xl text-center mt-10 font-semibold">Não há imagens em sua galeria.</p>
    ): (
      <div className="grid grid-cols-4  md:grid-cols-3 lg:grid-cols-4 mt-3 gap-1 px-5 md:px-10 h-full">
        {isLoading && Array.from({length: 20}).map((_,index) => (<SkeletonPhoto key={index}/>))}
        
        { photos && photos.map(photo => (
           <Dialog.Root key={photo.id}>
            <Dialog.Trigger>
              <img 
                src={photo.download_url} 
                width={80} 
                height={80} 
                className="border bg-gray-300 h-20 w-full sm:w-full sm:h-56 md:w-full md:h-80  rounded-lg object-cover lg:w-full lg:h-80 hover:scale-110 transition-all"
                alt={`Foto de autor ${photo.author}`}
                loading="lazy"
              />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className='inset-0 fixed bg-black/50'/> 
              <PhotoModal photo={photo}/>
            </Dialog.Portal>
           </Dialog.Root>
          ))}
      </div>

    )}
    </>

  )
}