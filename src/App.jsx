import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import "./global.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
