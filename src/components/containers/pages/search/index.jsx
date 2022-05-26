import React, { useState, useEffect } from 'react';
import { getSearches } from '../../../../infra/api';
import { SearchTemplate } from '../../templates/search';

export function SearchIndex() {
  // const [notifications, setNotifications] = useState([]);
  // const [visitors, setVisitors] = useState([]);
  // const [likeVisitors, setLikeVisitors] = useState([]);
  // useEffect(() => {
  //   let isMounted = true;
  //   // const user = { user_id: currentUserId };
  //   getSearches()
  //     .then((response) => {
  //       // if (isMounted) setNotifications(response.data.notifications);
  //       // if (isMounted) setVisitors(response.data.follow_visitors);
  //       // if (isMounted) setLikeVisitors(response.data.like_visitors);
  //     })
  //     .catch();
  //   // .catch(() => {
  //   // });
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return <SearchTemplate />;
}