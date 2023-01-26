export const useSortDescendingOrder = (data) => {
  // todo: データ量が多い場合処理が重くなる可能性があるため、後々この機能はAPI側に移行する。
  const list = data;
  if(list) {
    const descendingOrderData = list.sort((a, b) => {
      if (a.id < b.id) {
        return 1;
      };
      if (a.id > b.id) {
        return -1;
      };
      return 0;
    });
    return descendingOrderData;
  } else {
    return null;
  };
};