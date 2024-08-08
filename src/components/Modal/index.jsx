import { useContext, useState } from "react";
import { GalleryContext } from "../../context/Gallery";
import { IoIosCloseCircleOutline, IoIosCloseCircle } from "react-icons/io";

export default function Modal() {
  const { selectedPhoto, setOpenModal } = useContext(GalleryContext);
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className="fixed top-0 left-0 bg-black-3 w-screen h-screen z-50 flex justify-center items-center">
      <div className="w-1/2 h-1/2 relative rounded-2xl overflow-hidden w-full max-w-564 mx-4">
        <img
          src={selectedPhoto.download_url}
          alt=""
          className="h-full w-full"
        />

        <div className="absolute top-0 left-0 h-full w-full bg-black-4 flex flex-col justify-end pl-3 pb-3 text-white">
          <span className="font-extrabold">
            Autor: <span className="ml-1 ">{selectedPhoto.author}</span>
          </span>
          <span className="font-extrabold">
            Largura: <span className="ml-1">{selectedPhoto.width}</span>
          </span>
          <span className="font-extrabold">
            Altura: <span className="ml-1">{selectedPhoto.height}</span>
          </span>
          <span className="font-extrabold">
            URL baixar imagem:{" "}
            <a
              href={selectedPhoto.download_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              selectedPhoto.download_url
            </a>
          </span>
        </div>
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-2 right-2 cursor-pointer text-3xl text-white"
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
        >
          {mouseOver === true ? (
            <IoIosCloseCircle />
          ) : (
            <IoIosCloseCircleOutline />
          )}
        </button>
      </div>
    </div>
  );
}
