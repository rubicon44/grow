export const useSortDescendingOrder = (data) => {
  const list = data;
  const descendingOrderData = list.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }
    return 0;
  });
  return descendingOrderData;
};