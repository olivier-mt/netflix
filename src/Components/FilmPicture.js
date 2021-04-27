import categories from "../movies.json";
import FilmStripe from "./FilmStripe";

const FilmPicture = (props) => {
  const { categoryIndex, imageIndex } = props;

  return (
    <img
      src={categories[categoryIndex].images[imageIndex]}
      alt=""
      className="film"
    />
  );
};

export default FilmPicture;
