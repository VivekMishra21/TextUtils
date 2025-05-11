import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useTranslation } from 'react-i18next';





function App() {
  const { i18n } = useTranslation();

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
    <div className="App">
      <select onChange={handleLangChange} className="form-select w-25 m-2">
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
      </div>
      <Navbar tittle="TextUtils" />
        <div className="container my=3">
        <TextForm heading="Enter the text to analyze Below" />
        </div>




     
      
    </>
  );
}

export default App;
