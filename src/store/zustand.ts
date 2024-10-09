import { create } from 'zustand';
import type { photo } from "../@types/photo";

export interface Favorites {
  photos: photo[];
  addFavorite: (photo: photo) => void;
  getFavorite: () => photo[];
  removeFavorite: (id: string) => void;
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

  addFavorite: (newPhoto: photo) => {
    const { photos } = get();
  
    const isAlreadyFavorite = photos.some(photo => photo.id === newPhoto.id);
    if (isAlreadyFavorite) return; 
  
    const updatedPhotos = [...photos, newPhoto];
    
    set({ photos: updatedPhotos });
  
    localStorage.setItem('photo-gallery', JSON.stringify(updatedPhotos));
  },

  removeFavorite: (photoId: string) => {
    const { photos } = get();

    
    const updatedPhotos = photos.filter(photo => photo.id !== photoId);
    
    
    set({ photos: updatedPhotos });

    localStorage.setItem('photo-gallery', JSON.stringify(updatedPhotos));
  },

  isFavorite: (id: string) => {
    const { photos } = get();
    return photos.some(photo => photo.id === id)
  }
}));
