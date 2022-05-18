import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { NotificationsList } from '../../organisms/users/notificationsList';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`;

export function UserNotificationsTemplate(props) {
  const { notifications } = props;
  return (
    <>
      <Header />
      <Main>
        <NotificationsList notifications={notifications} />
      </Main>
    </>
  );
}

// TaskIndexTemplate.defaultProps = {
//   tasks: [],
// };

// TaskIndexTemplate.propTypes = {
//   tasks: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number,
//       title: PropTypes.string,
//       content: PropTypes.string,
//       status: PropTypes.number,
//       start_date: PropTypes.string,
//       end_date: PropTypes.string,
//       created_at: PropTypes.string,
//       updated_at: PropTypes.string,
//       user_id: PropTypes.string,
//       user: PropTypes.exact({
//         id: PropTypes.number,
//         name: PropTypes.string,
//         created_at: PropTypes.string,
//         updated_at: PropTypes.string,
//         email: PropTypes.string,
//         firebase_id: PropTypes.string,
//         password_digest: PropTypes.string,
//         bio: PropTypes.string,
//       }),
//     })
//   ),
// };