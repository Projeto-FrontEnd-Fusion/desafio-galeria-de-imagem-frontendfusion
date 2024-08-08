import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import PropTypes from "prop-types";

export default function Button({ func, like = false }) {
  return (
    <button
      className="absolute top-3 left-3 bg-black-1 rounded-full h-12 w-12 flex items-center justify-center z-20"
      onClick={func}
    >
      {like === true ? (
        <CiHeart className="text-2xl text-white pointer-events-none" />
      ) : (
        <FaHeart className="text-lg text-white pointer-events-none" />
      )}
    </button>
  );
}

Button.propTypes = {
  func: PropTypes.func,
  like: PropTypes.bool,
};
