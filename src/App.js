import Container from "./components/Container";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container pt-4">
        <Container />
      </div>
    </div>
  );
}

export default App;
