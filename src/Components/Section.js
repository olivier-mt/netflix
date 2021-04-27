import Title from "./Title";
import FilmStripe from "./FilmStripe";

const Section = ({ category, index }) => {
  return (
    <div>
      <Title category={category.category} />
      <FilmStripe images={category.images} />
    </div>
  );
};

export default Section;
