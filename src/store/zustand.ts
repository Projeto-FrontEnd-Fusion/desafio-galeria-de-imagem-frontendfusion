import { create } from 'zustand';
import type { photo } from "../@types/photo";

export interface Favorites {
  photos: photo[];
  toggleFavorite: (photo: photo) => void;
  getFavorite: () => photo[];
  isFavorite: (id: string) => boolean; 

}

export const useStore = create<Favorites>((set, get) => ({
  photos: [],

  getFavorite: () => {
    const local = localStorage.getItem('photo-gallery');
    if (!local) {
      return []; 
    }

    const data: photo[] = JSON.parse(local);
    
    
    set({ photos: data });
    
    return data; 
  },

  toggleFavorite: (newPhoto: photo) => {
    const { photos } = get();
  
    
    const isAlreadyFavorite = photos.some(photo => photo.id === newPhoto.id);
  
    let updatedPhotos;
    
    if (isAlreadyFavorite) {
      updatedPhotos = photos.filter(photo => photo.id !== newPhoto.id);
    } else {
      updatedPhotos = [...photos, newPhoto];
    }
    set({ photos: updatedPhotos });
  
    localStorage.setItem('photo-gallery', JSON.stringify(updatedPhotos));
  },

  isFavorite: (id: string) => {
    const { photos } = get();
    return photos.some(photo => photo.id === id)
  }
}));
