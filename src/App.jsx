import { GalleryProvider } from "./context/Gallery.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <GalleryProvider>
      <Home />
    </GalleryProvider>
  );
}
