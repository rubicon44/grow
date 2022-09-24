import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// todo: フォローしている人をこのページでもフォロー解除 or フォローできるようにしたい(ここでもフォローボタンを呼び出す)。
// フォローボタンとフォロー解除ボタンは3箇所でしか使用しないため、共通化しなくても良さそう。そのままベタ書きでOK。
// つまり、このページにもfollowing_idとfollower_idが必要になる(userShowページから飛ばす？それしか方法がなさそう。)。
// import { postRelationships, deleteRelationships } from '../../../../infra/api';
import { Title } from '../../../presentational/atoms/Title/title';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
// import { List } from '../../../presentational/molecules/List/list';
import { FollowButtonForUsersList } from './followButtonForUsersList';

// todo: まずは、フォローしたユーザーを一覧表示させるのが先決。このページでfollowFunc、unFollowFuncを実装するのはあとで良い。
export function FollowersList(props) {
  const { followers } = props;
  const { userId } = props;

  // const followFunc = () => {
  //   const relationships = { following_id: followings.following_id, follower_id: followings.follower_id };
  //   // postRelationships(relationships)
  //   //   .then((response) => {
  //   //     console.log(response.data);
  //   //   })
  //   //   .catch();
  //   // // .catch((data) => {
  //   // // });
  //   setFollowAble(true);
  // };

  // const unFollowFunc = () => {
  //   const relationships = { following_id: followings.following_id, follower_id: followings.follower_id };
  //   // deleteRelationships(relationships)
  //   //   .then((response) => {
  //   //     console.log(response.data);
  //   //   })
  //   //   .catch();
  //   // // .catch((data) => {
  //   // // });
  //   setFollowAble(false);
  // };

  // todo: ただ並べるだけのリストを作成する(今の所共通化はしなくてもよいが、おそらくシンプルでただ要素を羅列するようなListが今後必要になりそう。)。
  // if (followAble === true) {
  // } else {
  //   return (
  //     <>
  //       <ListHeader>
  //         <BackButton />
  //         <Title title="タスク詳細" />
  //       </ListHeader>
  //       <ListCover>
  //         {/* <List
  //           title={followings.nickname}
  //           taskId={String(taskId)}
  //           content={taskContent}
  //           taskUserId={String(taskUserId)}
  //           taskCreatedUserId={String(taskCreatedUserId)}
  //           taskCreatedUserNickName={taskCreatedUserNickName}
  //         /> */}
  //       </ListCover>
  //     </>
  //   );
  // }
  if (followers == null || followers == '') {
    return (
      <>
        <ListHeader>
          <BackButton />
          <Title title="フォロワー" />
        </ListHeader>
        <ListCover>
          <div>フォロワーはいません。</div>
        </ListCover>
      </>
    )
  } else {
    return (
      <>
        <ListHeader>
          <BackButton />
          <Title title="フォロワー" />
        </ListHeader>
        <ListCover>
          {/* <ListStyle>
            <dt>
              <Link to={`/users/${taskUserId}/tasks/${taskId}`}>{title}</Link>
            </dt>
            <dd>{content}</dd>
          </ListStyle> */}
          {followers.map((users) => (
            <UsersList>
              <Link to={`/${users.username}`}>{users.nickname}</Link>
              <FollowButtonForUsersList followerId={users.id} userId={userId} />
            </UsersList>
          ))}
        </ListCover>
      </>
    );
  }
}

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;

const ListHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`;

const UsersList = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;

  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;

// TaskList.defaultProps = {
//   task: {},
//   taskCreatedUser: {},
// };

// TaskList.propTypes = {
//   task: PropTypes.exact({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     content: PropTypes.string,
//     status: PropTypes.number,
//     start_date: PropTypes.string,
//     end_date: PropTypes.string,
//     created_at: PropTypes.string,
//     updated_at: PropTypes.string,
//     user_id: PropTypes.string,
//     user: PropTypes.exact({
//       id: PropTypes.number,
//       nickname: PropTypes.string,
//       created_at: PropTypes.string,
//       updated_at: PropTypes.string,
//       email: PropTypes.string,
//       firebase_id: PropTypes.string,
//       password_digest: PropTypes.string,
//       bio: PropTypes.string,
//     }),
//   }),
//   taskCreatedUser: PropTypes.exact({
//     id: PropTypes.number,
//     nickname: PropTypes.string,
//     created_at: PropTypes.string,
//     updated_at: PropTypes.string,
//     email: PropTypes.string,
//     firebase_id: PropTypes.string,
//     password_digest: PropTypes.string,
//     bio: PropTypes.string,
//   }),
// };