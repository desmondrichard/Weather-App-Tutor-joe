import './App.css';
import Content from './Components/Body/Content';
import SearchCity from './Components/Body/SearchCity';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  // SearchCity input:
  const [city, setCity] = useState("")

  const handleSearchCitySubmit = (e) => {
    e.preventDefault();
    console.log("Successfully submitted")
  }

  return (
    <div className='parentDiv'>
      <div className='subDiv'>
        <Header title="WEATHER REPORT APP" />
        <SearchCity city={city} setCity={setCity} handleSearchCitySubmit={handleSearchCitySubmit} />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
