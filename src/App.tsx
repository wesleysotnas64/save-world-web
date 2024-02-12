import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import MainFrame from "./components/main-frame/main-frame";
import { ContentArea } from "./components/contentArea/contentArea";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <MainFrame />
        <ContentArea />
        <Footer />
      </div>
    </>
  );
}

export default App;
