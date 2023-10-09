import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const EventCard = ({ card }) => {
  const { id, name, image_url, price, description } = card || {};
  return (
    <div className="w-[80%] mx-auto md:w-full">
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
            <Link to={`/events/${id}`}>
              <button className="btn bg-black hover:bg-black font-bold text-white capitalize">
                Show Details
              </button>
            </Link>
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
