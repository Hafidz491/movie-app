const Cards = ({ movie }) => {
  return (
    <div className="w-52 h-72 rounded bg-white">
      <a href="">
        <img
          src={movie}
          alt="movie"
          className="w-full h-full object-cover rounded"
        />
      </a>
    </div>
  );
};

export default Cards;
