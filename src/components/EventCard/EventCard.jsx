import PropTypes from "prop-types";
const EventCard = ({ card }) => {
  const { name, image_url, price, description } = card || {};
  return (
    <div className="">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full bg-cover bg-center"
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-black hover:bg-black font-bold text-white capitalize">
              Show Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
EventCard.propTypes = {
  card: PropTypes.object,
};
export default EventCard;
