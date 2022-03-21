import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { getUser } from '../../../../infra/api';
import { Header } from '../../organisms/header';
import { AuthContext } from '../../../../auth/authProvider';
import { LogOutButton } from '../../../presentational/atoms/Button/logOut';
import { getCurrentUser } from '../../../../infra/api';

const BackButtonCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;

  > svg {
    cursor: pointer;
  }
`

const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`

const Title = styled.h2`
  width: 288px;
  font-size: 36px;
  font-family: YuMincho;
`

const TaskListCover = styled.div``

const TaskList = styled.dl`
  margin-top: 30px;
  text-align: left;

  > dt {
    font-weight: bold;
  }

  > dd {
    min-height: 100px;
    min-width: 180px;
    margin: 10px 0;
    padding: 5px;
    border: 1px solid #bbb;
  }
`

const LogOutButtonCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-top: 1px solid #000;
  box-sizing: border-box;
`

export function UserShow() {
  const location = useLocation();
  const locationPathName = location.pathname.split("/");
  const user_id = locationPathName[locationPathName.length -1];

  const [taskUser, setTaskUser] = useState([]);
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getUser(user_id)
    .then(response => {
      const taskUser = response.data.user;
      let taskData = taskUser.tasks;
      const dOrderData = sortdOrder(taskData);
      if (isMounted) setTaskUser(taskUser);
      if (isMounted) setUserTasks(dOrderData);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [userTasks]);

  const sortdOrder = (taskData) => {
    const list = taskData;
    if (list.length === 0) {
      const dOrder = [];
      return dOrder;
    } else {
      const dOrder = list.sort(function (a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
      return dOrder;
    }
  };

  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const { currentUser } = useContext(AuthContext);
  const [currentUserId, setCurrentUserId] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
    .then(response => {
      const currentUserId = response.data.user.id;
      if (isMounted) setCurrentUserId(currentUserId);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [currentUserId]);

  return (
    <React.Fragment>
      <Header />
      <BackButtonCover>
        <ArrowBackIosIcon onClick={handleBackButtonClick} />
      </BackButtonCover>
      <LoginBackground>
        <Title>{taskUser.name}</Title>

        <TaskListCover>
          {userTasks.length === 0
            ? <div key={userTasks}>まだ投稿はありません。</div>
            : userTasks.map((task) => {
                return (
                  <TaskList key={task.id}>
                    <dt>
                      <Link to={`tasks/${task.id}`}>{task.title}</Link>
                    </dt>
                    <dd>{task.content}</dd>
                  </TaskList>
                );
              })
          }
        </TaskListCover>
        {currentUserId === taskUser.id &&
          <LogOutButtonCover>
            { currentUser && <LogOutButton text="ログアウト" /> }
          </LogOutButtonCover>
        }
      </LoginBackground>
    </React.Fragment>
  )
};