import PropTypes from "prop-types";

const EventDetails = ({ card }) => {
  const { id, name, image_url, price, description, details } = card || {};
  console.log(name);

  return <div>{name}</div>;
};
EventDetails.propTypes = {
  card: PropTypes.object,
};
export default EventDetails;
