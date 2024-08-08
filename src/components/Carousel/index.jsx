import PropTypes from "prop-types";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { Button } from "../index";
import {  useRef } from "react";
import FilterContainer from "./FilterContainer";

export default function Carousel({ title, children, mainCarousel = false }) {
  const carousel = useRef(null);
 


  const previousPhoto = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const nextPhoto = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

 
  return (
    <section className="relative w-screen">
      <h2 className="text-white pl-6 text-4xl mb-6">{title}</h2>
      <FilterContainer mainCarousel={mainCarousel}/>

      <div
        className="flex overflow-hidden items-center gap-3 p-6 scroll-smooth"
        ref={carousel}
      >
        {children}
      </div>

      <Button func={previousPhoto} position="left-6">
        <MdOutlineArrowBackIosNew />
      </Button>

      <Button func={nextPhoto} position="right-6">
        <MdArrowForwardIos />
      </Button>
    </section>
  );
}

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
  mainCarousel: PropTypes.bool
};
