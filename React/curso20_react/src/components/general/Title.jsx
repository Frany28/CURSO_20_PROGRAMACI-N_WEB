import propTypes from "prop-types";

/**
 *
 * @param {string} text - Text to show in the title
 * @param {string} classes - Classes to apply to the title
 * @returns {JSX.Element} - Title component
 */
function Title({ text, classes }) {
  return <h1 className={`font-bold text-4xl ${classes}`}>{text}</h1>;
}

Title.propTypes = {
  text: propTypes.string,
  classes: propTypes.string,
};

export default Title;
