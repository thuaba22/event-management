import PropTypes from "prop-types";

const TeamMember = ({ team }) => {
  const { name, image_url, profession } = team || {};
  return (
    <div className="flex flex-col items-center mt-10">
      <div>
        <img src={image_url} alt="" />
      </div>
      <div className="text-center mt-2 text-white">
        <p>{name}</p>
        <p>{profession}</p>
      </div>
    </div>
  );
};
TeamMember.propTypes = {
  team: PropTypes.object,
};

export default TeamMember;
