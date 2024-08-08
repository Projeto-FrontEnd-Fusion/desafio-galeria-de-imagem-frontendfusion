import PropTypes from "prop-types";

export default function Button({ children, func, position }) {
  return (
    <button
      className={`absolute top-2/3 text-white cursor-pointer bg-black-1 hover:bg-black-2 flex rounded-full h-14 w-14 items-center justify-center text-lg ${position}`}
      onClick={func}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.element,
  func: PropTypes.func,
  position: PropTypes.string,
};
