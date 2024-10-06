import type { photo } from "../@types/photo"

interface PhotoGalleryProps {
  photos: photo[]
}

export function PhotoGallery({ photos } : PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-4 mt-3 gap-1">
      { photos && photos.map(photo => (
          <img 
            key={photo.id} 
            src={photo.download_url} 
            width={80} 
            height={80} 
            className="border bg-red-50 h-20 w-20 rounded-lg object-cover "
            alt={photo.id} 
          />
        ))}
    </div>
  )
}