import type { photo } from "../@types/photo"
import { SkeletonPhoto } from "./skeleton"

interface PhotoGalleryProps {
  photos: photo[]
  isLoading: boolean
}

export function PhotoGallery({ photos ,isLoading} : PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-4  md:grid-cols-3 lg:grid-cols-4 mt-3 gap-1">
      {isLoading && Array.from({length: 20}).map((_,index) => (<SkeletonPhoto key={index}/>))}
      { photos && photos.map(photo => (
          <img 
            key={photo.id} 
            src={photo.download_url} 
            width={80} 
            height={80} 
            className="border bg-gray-300 h-20 w-full sm:w-full sm:h-56 md:w-full md:h-80  rounded-lg object-cover lg:w-full lg:h-80"
            alt={photo.id} 
            loading="lazy"
          />
        ))}
    </div>
  )
}