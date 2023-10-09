import PropTypes from "prop-types";

const SingleDetails = ({ eventValue }) => {
  const { name, details, image_url } = eventValue || {};
  return (
    <div className="w-[80%] mx-auto mt-[50px]">
      <div className="mb-[56px]">
        <img className="w-full h-[500px]" src={image_url} alt="" />
      </div>
      <h1 className="text-[40px] font-bold text-[#0B0B0B] mb-6">{name}</h1>
      <p className="text-[#0B0B0BB2] text-[16px] mb-[60px]">{details}</p>
    </div>
  );
};
SingleDetails.propTypes = {
  eventValue: PropTypes.object,
};
export default SingleDetails;
