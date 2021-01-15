//importacion de modulos del componente App
// importacion de componentes propios, la navegacion y el contenedor
import Container from "./components/Container";
import NavBar from "./components/NavBar";

//funcion definida como modulo App
function App() {
  //retorno de la funcion
  return (
    //utilizando JSX retordamos elementos html
    <div>
      {/* renderizar el componente NavBar */}
      <NavBar />
      <div className="container pt-4">
        {/* renderizar el componente Container */}
        <Container />
      </div>
    </div>
  );
}
// este modulo va a exportar por defecto la funcion App como un componente
export default App;
