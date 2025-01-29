import Button from "./../components/general/Button";
import Article from "../components/general/Article";

function Home() {
  return (
    <>
      <section>
        header
        <Button texto="Hola Mundo"></Button>
        <Article>
          <h1>Titulo</h1>
          <p>Parrafo</p>
        </Article>
      </section>
      <section>Products</section>
      <section>More info</section>
    </>
  );
}

export default Home;
