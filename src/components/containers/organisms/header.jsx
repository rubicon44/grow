import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../auth/authProvider';
import clsx from 'clsx';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { LogOutButton } from '../../presentational/atoms/Button/logOut';
import { getCurrentUser } from '../../../infra/api';

const HeaderCover = styled.div`
  display: flex;
  height: 50px;
  padding: 12px 15px;
  box-sizing: border-box;
`

const Logo = styled(Link)`
  font-size: 22px;
  font-weight: bold;
  font-family: YuMincho;
  color: #ff444f;
  text-decoraiton: none;
`

const HeaderMenuGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

// 下記「(theme) => ({~を追記することにより、useStylesの中でthemeが扱えるようになる。」
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listCenter: {
    textAlign: 'center',
  },
  iconButton: {
    padding: 0,
    marginLeft: 16,
    color: '#bbb',
  },
}));

export function Header() {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [userId, setUserId] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
    .then(response => {
      const userId = response.data.user.id;
      if (isMounted) setUserId(userId);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [userId]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {['Home', 'Post', 'Report', 'Notification'].map((text, index) => (
          <ListItem button key={text} className={clsx(classes.listCenter)}>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}

        <Link to="/top">
          <ListItem button className={clsx(classes.listCenter)}>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/tasks">
          <ListItem button className={clsx(classes.listCenter)}>
            <ListItemText primary="Task" />
          </ListItem>
        </Link>
        <Link to="/tasks/create">
          <ListItem button className={clsx(classes.listCenter)}>
            <ListItemText primary="Post" />
          </ListItem>
        </Link>
        <Link to={"/users/" + userId}>
          <ListItem button className={clsx(classes.listCenter)}>
            <ListItemText primary="Report" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {/* {['ログイン', '会員登録'].map((text, index) => (
          <ListItem button key={text} className={clsx(classes.listCenter)}>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}

        <Link to="/sign_in">
          <ListItem button className={clsx(classes.listCenter)}>
            <ListItemText primary="ログイン" />
          </ListItem>
        </Link>
        <Link to="/sign_up">
          <ListItem button className={clsx(classes.listCenter)}>
            <ListItemText primary="会員登録" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <HeaderCover>
      <Logo to="/">Grow</Logo>
      <HeaderMenuGroup>
      { currentUser &&
        <React.Fragment>
          <LogOutButton text="ログアウト" />
        </React.Fragment>
      }
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)}><MenuIcon /></IconButton>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </HeaderMenuGroup>
    </HeaderCover>
  );
}