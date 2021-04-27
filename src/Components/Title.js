import categories from "../movies.json";

const Title = ({ index }) => {
  const categoriesTitle = categories.map((type) => {
    return type.category;
  });

  return <h2>{categoriesTitle[index]}</h2>;
};

export default Title;
