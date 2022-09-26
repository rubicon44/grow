import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCurrentUser, postRelationships, deleteRelationships, getFollowings } from '../../../../infra/api';

export function FollowButtonForUsersList(props) {
  const [followAble, setFollowAble] = useState(false);
  const [changeFollowButtonStyle, setChangeFollowButtonStyle] = useState(false);

  const [currentUserId, setCurrentUserId] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
      .then((response) => {
        const currentUserId = String(response.data.user.id);
        if (isMounted) setCurrentUserId(currentUserId);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [currentUserId]);

  const { followerId } = props;
  const { userId } = props;

  const followFunc = () => {
    const relationships = { following_id: currentUserId, follower_id: followerId };
    postRelationships(relationships)
      .then((response) => {
        console.log(response.data);
      })
      .catch();
    // .catch((data) => {
    // });
    setFollowAble(false);
    // todo: 下記方法は修正の余地ありの可能性あり。
    // 「フォロー中」と「フォロー」を切り替えるため、useEffectの依存関係になっているcurrentUserIdを更新。
    setCurrentUserId(null)
  };

  const unFollowFunc = () => {
    const relationships = { following_id: currentUserId, follower_id: followerId };
    deleteRelationships(relationships)
      .then((response) => {
        console.log(response.data);
      })
      .catch();
    // .catch((data) => {
    // });
    setFollowAble(true);
  };

  const [followings, setFollowings] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const user_id = userId;
    getFollowings(user_id)
      .then((response) => {
        if (isMounted) setFollowings(response.data.followings);
      })
      .catch();
    // .catch(() => {
    // });
    return () => {
      isMounted = false;
    };
  }, [userId]);

  const [usersFollowingId, setUsersFollowingId] = useState();
  useEffect(() => {
    followings.map((users) => {
      for (let i = 0; i < followings.length; i++) {
        if(String(users.id) == String(followerId)) {
          setUsersFollowingId(users.id);
        } else {
          return null;
        }
      }
    })
  }, [followings]);

  if(String(currentUserId) === String(userId)) {
    return(
      <>
        {followAble === false ? (
          <>
            {String(usersFollowingId) === String(followerId) ? (
              <FollowChange>
                <FollowChangeLinkCover>
                  {changeFollowButtonStyle === false ? (
                    <FollowChangeLinkDone
                      onMouseEnter={() => {
                        setChangeFollowButtonStyle(true);
                      }}
                      >
                      <span>フォロー中</span>
                    </FollowChangeLinkDone>
                  )
                  : (
                    <FollowChangeLinkDoneToUnFollow
                      onMouseLeave={() => {
                        setChangeFollowButtonStyle(false);
                      }}
                      onClick={() => {
                        unFollowFunc();
                      }}
                      >
                      <span>フォロー解除</span>
                    </FollowChangeLinkDoneToUnFollow>
                  )}
                </FollowChangeLinkCover>
              </FollowChange>
            ) : (
              <FollowChange>
                <FollowChangeLinkCover>
                  <FollowChangeLinkNone
                    onClick={() => {
                      followFunc();
                    }}
                  >
                    <span>フォロー</span>
                  </FollowChangeLinkNone>
                </FollowChangeLinkCover>
              </FollowChange>
            )}
          </>
        ) : (
          <FollowChange>
            <FollowChangeLinkCover>
              <FollowChangeLinkNone
                onClick={() => {
                  followFunc();
                }}
              >
                <span>フォロー</span>
              </FollowChangeLinkNone>
            </FollowChangeLinkCover>
          </FollowChange>
        )}
      </>
    );
  } else {
    return null;
  }
}

const FollowChange = styled.div`
  margin-left: 30px;
`;

const FollowChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FollowChangeLinkDone = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 168px;
  border: 1px solid black;
  border-color: rgb(207, 217, 222);
  border-radius: 9999px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

const FollowChangeLinkDoneToUnFollow = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 168px;
  border: 1px solid black;
  border-color: rgb(253, 201, 206);
  border-radius: 9999px;
  font-weight: bold;
  background-color: rgba(244, 33, 46, 0.1);
  cursor: pointer;
`;

const FollowChangeLinkNone = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 168px;
  border: 1px solid black;
  border-color: rgb(207, 217, 222);
  border-radius: 9999px;
  color: #fff;
  font-weight: bold;
  background-color: rgb(15, 20, 25);
  cursor: pointer;
`;
