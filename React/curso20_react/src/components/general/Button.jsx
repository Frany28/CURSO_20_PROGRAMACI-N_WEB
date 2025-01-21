import propTypes from "prop-types";

function Button({ texto = "Presioname", estilos }) {
  return <button className={estilos}>{texto}</button>;
}

Button.propTypes = {
  texto: propTypes.string,
  estilos: propTypes.string,
};

export default Button;
