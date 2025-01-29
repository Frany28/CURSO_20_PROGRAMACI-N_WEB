import propTypes from "prop-types";

/**
 * @component Paragraph
 * @description Show a paragraph with a text.
 * @param {string} children - Text to show in the paragraph
 * @param {string} classes - Classes to apply to the paragraph
 * @returns {JSX.Element} - Paragraph component
 */

// Objective: Show a paragraph with a text.
function Paragraph({ children = "", classes = "" }) {
  return <p className={`text-x1 font-light ${classes}`}>{children}</p>;
}

Paragraph.propTypes = {
  children: propTypes.string.isRequired,
  classes: propTypes.string,
};

export default Paragraph;
