import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { currentUser } from '../../../infra/currentUser';

export function Header() {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  let currentUserName;
  if(localStorage.getItem('user')) {
    currentUserName = currentUser().username;
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const headerLinks = [
    { url: '/top', text: 'Top' },
    { url: '/tasks', text: 'Home' },
    { url: '/tasks/create', text: 'Post' },
    { url: `/${currentUserName}`, text: 'Report' },
    { url: `/notifications`, text: 'Notifications' },
    { url: `/search`, text: 'Search' },
  ];

  const headerLinksForAuth = [
    { url: '/signIn', text: 'ログイン' },
    { url: '/signUp', text: '会員登録' },
  ];

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
        {headerLinks.map((headerLink) => (
          <Link to={headerLink.url} key={headerLink.url}>
            <ListItem
              button
              key={headerLink.text}
              className={clsx(classes.listCenter)}
            >
              <ListItemText primary={headerLink.text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {headerLinksForAuth.map((headerLink) => (
          <Link to={headerLink.url} key={headerLink.url}>
            <ListItem
              button
              key={headerLink.text}
              className={clsx(classes.listCenter)}
            >
              <ListItemText primary={headerLink.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <HeaderCover>
      <Logo to="/tasks">Grow</Logo>
      <HeaderMenuGroup>
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </IconButton>
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

const HeaderCover = styled.div`
  display: flex;
  height: 50px;
  padding: 12px 15px;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  font-size: 22px;
  font-weight: bold;
  font-family: YuMincho;
  color: #ff444f;
  text-decoraiton: none;
`;

const HeaderMenuGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const useStyles = makeStyles(() => ({
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