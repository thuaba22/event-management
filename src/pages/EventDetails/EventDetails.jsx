import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDetails from "./SingleDetails";

const EventDetails = () => {
  const [eventValue, setEventValue] = useState({});
  const { id } = useParams();
  const totalData = useLoaderData();
  useEffect(() => {
    const findEvent = totalData?.find((eventValue) => eventValue.id == id);
    setEventValue(findEvent);
  }, [id, totalData]);
  if (eventValue) {
    return (
      <div>
        <SingleDetails eventValue={eventValue}></SingleDetails>
      </div>
    );
  }
};
EventDetails.propTypes = {
  card: PropTypes.object,
};
export default EventDetails;
