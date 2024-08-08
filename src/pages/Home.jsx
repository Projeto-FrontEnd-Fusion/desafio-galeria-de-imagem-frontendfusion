import { useContext } from "react";
import { Modal, MainContent } from "../components";
import { GalleryContext } from "../context/Gallery";

export default function Home() {
  const { openModal } = useContext(GalleryContext);
  return (
    <>
      <MainContent />
      {openModal && <Modal />}
    </>
  );
}
