const apiRoot = '/api'

export const getPopularEventsByCat = (cat: string) =>
  `${apiRoot}/popular/event_ids/sport/${cat}/`

export const getEventDetail = (id: number) => `${apiRoot}/events/${id}/`
