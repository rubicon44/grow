import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getUser, postRelationships, deleteRelationships, getFollowings } from '../../../../infra/api';

export function FollowButton(props) {
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const userNameInUrl = locationPathName[locationPathName.length - 1];
  const { currentUserId } = props;
  const [followAble, setFollowAble] = useState(false);
  const [changeFollowButtonStyle, setChangeFollowButtonStyle] = useState(false);
  const [followerId, setFollowerId] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(userNameInUrl)
      .then((response) => {
        const followerId = response.data.user.id;
        if (isMounted) setFollowerId(String(followerId));
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [userNameInUrl]);

  const [usersFollowingId, setUsersFollowingId] = useState([]);
  const followFunc = () => {
    const relationships = { following_id: currentUserId, follower_id: followerId };
    postRelationships(relationships)
      .then((response) => {
        // console.log(response.data);
      })
      .catch();
    // .catch((data) => {
    // });
    setFollowAble(false);
    setUsersFollowingId(followerId);
  };

  const unFollowFunc = () => {
    const relationships = { following_id: currentUserId, follower_id: followerId };
    deleteRelationships(relationships)
      .then((response) => {
        // console.log(response.data);
      })
      .catch();
    // .catch((data) => {
    // });
    setFollowAble(true);
  };

  const [followings, setFollowings] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const user_id = currentUserId;
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
  }, [followAble]);

  useEffect(() => {
    followings.map((users) => {
      if(String(users.id) === String(followerId)) {
        setUsersFollowingId(users.id);
      } else {
        return null;
      }
    })
  }, [followerId]);

  if(currentUserId !== followerId) {
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
  width: 100%;
  margin-bottom: 30px;
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