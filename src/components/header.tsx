import { Camera, Heart } from "lucide-react";
import type { GallerySection } from "../@types/gallery-section";
import clsx from "clsx";


interface HeaderProps {
  gallerySection: GallerySection
  setGallerySection: (section: GallerySection) => void
}

export function Header({gallerySection, setGallerySection }:HeaderProps) {
  return (
    <header>
      <h1 className="text-center font-bold text-2xl py-4">Galeria</h1>
      <nav className="h-14">
        <ul className="flex items-center justify-around h-full border-b">
          <button onClick={() => setGallerySection('photos')}>
            <li className={clsx("flex justify-center gap-2", {
                'font-bold ': gallerySection === 'photos', // Classe quando a seção ativa é 'photos'
            })}>
              <Camera className="size-5" />
              Photos
            </li>
          </button>
          <button onClick={() => setGallerySection("favorite")}>
            <li className={clsx("flex justify-center gap-2", {
                'font-bold': gallerySection === 'favorite', 
            })}>
              <Heart className="size-5 fill-red-600 stroke-red-600" />
              Favoritos
            </li>
          </button>
        </ul>
      </nav>
    </header>
  )
}