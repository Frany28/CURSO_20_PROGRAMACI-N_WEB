import Button from "./Button";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-8 bg-gray-800 text-white">
      <div>
        <p>Logo</p>
      </div>
      <div className="flex gap-4 items-center">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <Button
          texto="Acceder"
          estilos="rounded-md px-2 py bg-blue-800"
        ></Button>
      </div>
    </nav>
  );
}

export default Navbar;
