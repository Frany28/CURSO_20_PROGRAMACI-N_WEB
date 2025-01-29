import propTypes from "prop-types";

/**
 * @component Subtitle
 * @description Show a subtitle with a text.
 * @param {string} text - Text to show in the subtitle
 * @param {string} classes - Classes to apply to the subtitle
 * @returns {JSX.Element} - Subtitle component
 */

function Subtitle({ text = "", classes = "" }) {
  return <h2 className={`text-2xl font-bold ${classes}`}>{text}</h2>;
}

Subtitle.propTypes = {
  text: propTypes.string,
  classes: propTypes.string,
};

export default Subtitle;
