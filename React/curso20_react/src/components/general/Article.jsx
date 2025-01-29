/*import proTypes from "prop-types";

//Article component se encarga de mostrar un articulo con un titulo y un parrafo
//dentro de un contenedor flex con un espacio de 2
//children: elementos que se pasan dentro del componente
function Article({ children }) {
  return <article className="flex flex-col gap-2">{children}</article>;
}

Article.propTypes = {
  children: proTypes.node,
};*/
import propTypes from "prop-types";
import Subtitle from "./../general/Subtitle";

function Article({ children, title = "Title" }) {
  return (
    <article className="px-8  py-4 flex flex-col items-center gap-4">
      <Subtitle text={title} classes="text-center" />
      {children}
    </article>
  );
}

Article.propTypes = {
  children: propTypes.node,
  title: propTypes.string,
};

export default Article;
