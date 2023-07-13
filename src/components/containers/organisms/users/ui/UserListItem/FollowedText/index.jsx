import PropTypes from "prop-types";
import styled from "styled-components";

export const FollowedText = ({ myFollowers, userId }) =>
  myFollowers &&
  myFollowers.some((follower) => String(follower.id) === String(userId)) && (
    <FollowedTextStyle>フォローされています</FollowedTextStyle>
  );

const FollowedTextStyle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  background-color: rgb(239, 243, 244);
  color: rgb(83, 100, 113);
`;

FollowedText.propTypes = {
  myFollowers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string,
      bio: PropTypes.string,
      email: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
  userId: PropTypes.string.isRequired,
};
