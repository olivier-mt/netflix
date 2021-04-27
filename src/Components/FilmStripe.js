import FilmPicture from "./FilmPicture";

const FilmStripe = ({ images }) => {
  let tab = images.map((url) => {
    return <FilmPicture url={url} />;
  });

  console.log(tab);

  return <div>{tab}</div>;
};

export default FilmStripe;
