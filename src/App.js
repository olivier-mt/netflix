import "./App.css";
import Section from "./Components/Section";
import categories from "./movies.json";
import Logo from "./images/netflixLogo.png";

function App() {
  let categoriesSections = categories.map((category, index) => {
    return <Section index={index} category={category} />;
  });

  return (
    <div className="main">
      <header>
        <img src={Logo} alt="logo" />
      </header>
      <div> {categoriesSections} </div>
    </div>
  );
}

export default App;
