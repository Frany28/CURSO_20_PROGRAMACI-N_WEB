function Slider() {
  return (
    <section>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </section>
  );
}

//componente local este componente solo se puede usar en este archivo
function Card() {
  return (
    <div>
      <h2>Título</h2>
      <p>Parrafo</p>
    </div>
  );
}

export default Slider;
