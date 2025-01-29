import Subtitle from "../general/Subtitle";
import Title from "../general/Title";
import propTypes from "prop-types";

/**
 * @component Hero
 * @description Componente Hero que muestra un titulo y un subtitulo centrados en la pantalla
 * @param {String} title Titulo del Hero
 * @param {String} author Subtitulo del Hero
 * @param {String} background Imagen de fondo del Hero
 */
function Hero({ title = "", author = "", background = "" }) {
  return (
    <section
      className={`flex flex-col items-center justify-center gap-3 text-cyan-50 bg-[url('${background}')] min-h-[50vh] bg-cover bg-center`}
    >
      <Title text={title} />
      <Subtitle text={author} />
    </section>
  );
}

Hero.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  background: propTypes.string.isRequired,
};

export default Hero;
