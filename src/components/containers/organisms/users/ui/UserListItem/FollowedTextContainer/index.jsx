import PropTypes from "prop-types";
import { useMyFollowers } from "../../../../../../../hooks/useMyFollowers";
import { FollowedText } from "../FollowedText";

export const FollowedTextContainer = ({ userId }) => {
  const { error, myFollowers } = useMyFollowers();

  if (error) return <>Error...</>;
  if (myFollowers === null) {
    return null;
  }
  return <FollowedText myFollowers={myFollowers} userId={userId} />;
};

FollowedTextContainer.propTypes = {
  userId: PropTypes.string.isRequired,
};
