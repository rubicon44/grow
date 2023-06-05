import PropTypes from "prop-types";
import { useGetErrorMessage } from "../../../../../../../hooks/useGetErrorMessage";
import { useMyFollowers } from "../../../../../../../hooks/useMyFollowers";
import { ErrorMessage } from "../../../../../pages/staticPages/ErrorMessage";
import { FollowedText } from "../FollowedText";

export const FollowedTextContainer = ({ userId }) => {
  const { getErrorMessage } = useGetErrorMessage();
  const { error, myFollowers } = useMyFollowers();

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  if (myFollowers === null) {
    return null;
  }
  return <FollowedText myFollowers={myFollowers} userId={userId} />;
};

FollowedTextContainer.propTypes = {
  userId: PropTypes.string.isRequired,
};
