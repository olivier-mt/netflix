import FilmPicture from "./FilmPicture";
import categories from "../movies.json";

const FilmStripe = ({ categoryIndex }) => {
  categories.map((movie, index) => {
    movie.images.map((image, index) => {
      console.log("It's working", index, image);
      return <FilmPicture categoryIndex={categoryIndex} imageIndex={index} />;
    });
  });

  console.log("FilmStripe==>", FilmStripe);
  return (
    <div className="stripe">
      <FilmPicture categoryIndex={categoryIndex} imageIndex={7} />
      <FilmPicture categoryIndex={categoryIndex} imageIndex={5} />
      <FilmPicture categoryIndex={categoryIndex} imageIndex={10} />
      <FilmPicture categoryIndex={categoryIndex} imageIndex={20} />
      <FilmPicture categoryIndex={categoryIndex} imageIndex={7} />
    </div>

    /* <div className="stripe">{FilmStripe}</div> <==== LIGNE POSANT PROBLEME !!   */
  );
};

export default FilmStripe;
