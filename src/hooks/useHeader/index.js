import { useState } from 'react';
import { useCurrentUserName } from '../useCurrentUserName';

export const useHeader = () => {
  const currentUserName = useCurrentUserName();
  const [drawerStatus, setDrawerStatus] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const headerLinks = [
    { url: '/top', text: 'Top' },
    { url: '/tasks', text: 'Home' },
    { url: '/tasks/create', text: 'Post' },
    { url: `/${currentUserName}`, text: 'Report' },
    { url: `/notifications`, text: 'Notifications' },
    { url: `/searches`, text: 'Searches' },
  ];

  const headerLinksForAuth = [
    { url: '/signIn', text: 'ログイン' },
    { url: '/signUp', text: '会員登録' },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    };
    setDrawerStatus({ ...drawerStatus, [anchor]: open });
  };

  return { headerLinks, headerLinksForAuth, drawerStatus, toggleDrawer };
};