import PropTypes from "prop-types";
import TeamMember from "../TeamMember/TeamMember";

const Teams = ({ teamData }) => {
  return (
    <div className="container  max-w-6xl mx-auto bg-black mt-20 mb-20 md:h-[400px] rounded-xl">
      <div className="pt-10">
        <h1 className="text-white text-4xl font-bold text-center mb-8">
          Meet the Team
        </h1>
        <p className="text-white text-center text-lg font-light">
          With over 100 years of combined experience, we have got a
          well-seasoned team at the helm.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {teamData?.map((team) => (
          <TeamMember key={team.id} team={team}></TeamMember>
        ))}
      </div>
    </div>
  );
};
Teams.propTypes = {
  teamData: PropTypes.array,
};
export default Teams;
