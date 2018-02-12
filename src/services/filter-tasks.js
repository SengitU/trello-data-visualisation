import { getListId, listNames } from '../board-information/lists';

const filterTasks = (data, listId) => {
  return data.cards.filter(card => card.idList === listId);
}

export const filterWeeklyCompletedTasks = (data/*, { startDate = dateUtils.getEarlierByDay(7), endDate = new Date()}*/) => {
  return filterTasks(data, getListId(data, listNames.DONE_WEEKLY));
}

export const filterOverallCompletedTasks = (data) => {
  return filterTasks(data, getListId(data, listNames.DONE_OVERALL));
}

