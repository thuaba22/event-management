import EventCard from "../EventCard/EventCard";
import PropTypes from "prop-types";

const Cards = ({ cards }) => {
  return (
    <div className="container  max-w-6xl mx-auto">
      <div className="mb-20">
        <h2 className="text-center rounded-xl w-[80%] mx-auto md:w-full text-2xl font-semibold bg-black text-white py-4">
          Our Signature Celebrations
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards?.map((card) => (
          <EventCard key={card.id} card={card}></EventCard>
        ))}
      </div>
    </div>
  );
};
Cards.propTypes = {
  cards: PropTypes.array,
};
export default Cards;
