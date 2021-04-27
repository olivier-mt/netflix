const FilmPicture = (props) => {
  const { url } = props;

  return <img src={url} alt="" className="film" />;
};

export default FilmPicture;
