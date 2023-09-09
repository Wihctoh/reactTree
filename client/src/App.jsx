import { Routes, Route } from "react-router-dom";
import TitlePage from "./pages/TitlePage/TitlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TitlePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
