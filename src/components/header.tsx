import { Camera, Heart } from "lucide-react";

export function Header() {
  return (
    <header>
      <h1 className="text-center font-bold text-2xl py-4">Galeria</h1>
      <nav className="h-14">
        <ul className="flex items-center justify-around h-full border-b">
          <li className="font-bold flex justify-center gap-2"> <Camera className="size-5"/> Photos </li>
          <li className="flex justify-center gap-2"> <Heart className="size-5 fill-red-600 stroke-red-600"/> Favoritos</li>
        </ul>
      </nav>
    </header>
  )
}