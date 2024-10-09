import { useStore } from "../store/zustand";
import * as Dialog from "@radix-ui/react-dialog";
import type { photo } from "../@types/photo";
import { ArrowLeft, Heart } from "lucide-react";
import clsx from "clsx";
interface PhotoModalProps {
  photo: photo;
}

export function PhotoModal({ photo }: PhotoModalProps) {
  const addFavorite = useStore((state) => state.toggleFavorite);
  const isFavorite = useStore((state) => state.isFavorite);



  const favorite = isFavorite(photo.id)

  return (
    <Dialog.Content
      className="overflow-hidden inset-0 md:inset-auto fixed md:left-1/2 md:top-1/2 md:-translate-x-1/2 outline-none md:-translate-y-1/2 md:max-w-[700px] md:px-4 md:h-[97vh] w-full bg-white md:rounded-md flex flex-col"
      aria-labelledby="photo-modal-title"
      aria-describedby="photo-modal-description"
    >
      <div className="px-2 py-4 flex items-center flex-col justify-center h-screen">
        <div className="flex items-center justify-between w-full">
          <Dialog.Close className="cursor-pointer">
            <ArrowLeft className="size-6" aria-label="Fechar modal" />
          </Dialog.Close>
          <Dialog.Title className="font-bold">Galeria</Dialog.Title>
          <button
            onClick={() => addFavorite(photo)}
            aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            <Heart
              className={clsx('size-6 stroke-red-900', {
                'fill-red-900': favorite, 
              })}
            />
          </button>
        </div>
        <img 
          src={photo.download_url} 
          height={460} 
          width={650}
          className="w-full mt-6 rounded-md h-52 md:h-[460px]" 
          alt={`Foto de autor ${photo.author}`}
        />
        <Dialog.Description className="w-full" asChild>
          <ul className="rounded-sm px-2 py-4 w-full flex flex-col gap-2">
            <li className="flex justify-between"><span className="font-bold">Autor:</span> {photo.author}</li>
            <li className="flex justify-between"><span className="font-bold">Largura:</span> {photo.width}</li>
            <li className="flex justify-between"><span className="font-bold">Altura:</span> {photo.height}</li>
          </ul>
        </Dialog.Description>
        <Dialog.Close className="w-full bg-emerald-500 p-3 mt-4 rounded-md" asChild>
          <button>
            <span className="sr-only">Voltar</span>
          </button>
        </Dialog.Close>

      </div> 
    </Dialog.Content>
  );
}
