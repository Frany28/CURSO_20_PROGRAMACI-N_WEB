//importacion de barrill de navegacion, hero, article y paragraph
import { Navbar, Hero, Article, Paragraph } from "../components/components";
//Componente de prueba para verificar la configuración de las rutas
function Test() {
  return (
    <>
      <Navbar />
      <Hero
        title="DOOM en un pdf"
        author="Autor: @Foone"
        background="https://i0.wp.com/levelup.buscafs.com/2025/01/PDF-DOOM.jpg?fit=1280,960&quality=75&strip=all"
      />
      <Article title="DOOM Corre en un pdf">
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus esse
          aliquam obcaecati nisi minima qui error ullam doloremque recusandae
          numquam eligendi facilis dicta, dolorum dignissimos quo suscipit
          possimus corporis ad!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea numquam
          similique distinctio, molestiae corrupti praesentium eaque expedita
          harum voluptate sunt ipsam animi reprehenderit voluptatibus nobis
          culpa temporibus obcaecati voluptates quia!
        </Paragraph>
      </Article>
    </>
  );
}

export default Test;
