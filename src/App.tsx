import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import MainFrame from "./components/main-frame/main-frame";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <MainFrame />
        <Footer />
      </div>
    </>
  );
}

export default App;
