import "./App.css";
import Section from "./Components/Section";
import categories from "./movies.json";

function App() {
  let categoriesSections = categories.map((category, index) => {
    console.log("indexeuh--->", index);
    return <Section index={index} category={category} />;
  });

  return <div className="main"> {categoriesSections} </div>;
}

export default App;
