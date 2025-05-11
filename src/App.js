import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { i18n } = useTranslation();

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Router>
      <div className="App">
        <select onChange={handleLangChange} className="form-select w-25 m-2">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>

        <Navbar tittle="TextUtils" />

        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={<TextForm heading="Enter the text to analyze Below" />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
