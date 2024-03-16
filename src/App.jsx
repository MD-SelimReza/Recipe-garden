import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header className="container lg:px-16">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
    </>
  );
}

export default App;
