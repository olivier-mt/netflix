import Title from "./Title";
import FilmStripe from "./FilmStripe";

const Section = ({ index }) => {
  return (
    <div>
      <Title index={index} />
      <FilmStripe categoryIndex={index} />
    </div>
  );
};

export default Section;
