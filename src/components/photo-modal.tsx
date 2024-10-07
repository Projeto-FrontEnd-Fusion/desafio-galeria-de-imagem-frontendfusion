import * as Dialog from "@radix-ui/react-dialog";
import type { photo } from "../@types/photo";
import { ArrowLeft, Heart } from "lucide-react";


interface PhotoModalProps {
  photo: photo
}

export function PhotoModal({ photo }: PhotoModalProps) {
  return (
     <Dialog.Content className="overflow-hidden inset-0 md:inset-auto fixed md:left-1/2 md:top-1/2 md:-translate-x-1/2 outline-none md:-translate-y-1/2  md:max-w-[700px] md:px-4 md:h-[85vh] w-full  bg-white md:rounded-md flex flex-col">
        <div className="px-2 py-4 flex items-center flex-col justify-center h-screen">
            <div className="flex items-center justify-between w-full">
              <Dialog.Close>
                <ArrowLeft className="size-6" />
              </Dialog.Close>
              <Heart className="size-6 stroke-red-900" />
            </div>
            <img 
              src={photo.download_url} 
              height={460} 
              width={650}
              className="w-full mt-6 rounded-md md:h-[460px]" 
              alt={`Foto de autor ${photo.author}`}
            />
            <ul className="rounded-sm  px-2 py-4 w-full flex  flex-col gap-2">
              <li className="flex justify-between"><span className="font-bold">Author:</span> Alejandro Escamilla</li>
              <li className="flex justify-between"><span className="font-bold">Width:</span> 5000</li>
              <li className="flex justify-between"><span className="font-bold">Height:</span> 3333</li>
            </ul>
            <Dialog.Close className="w-full bg-emerald-500 p-3 mt-4 rounded-md">
              Voltar
            </Dialog.Close>
        </div> 
     </Dialog.Content>
  )
}