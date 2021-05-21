import {
  EVENT_FETCH_FINISH,
  EVENT_FETCH_POPULAR_FINISH,
  EVENT_FETCH_POPULAR_START,
  EVENT_FETCH_START,
} from './constants'

interface EventState {
  events: EventData[]
  popularEvents: Record<string, number[]>
  eventsFetching: Record<number, boolean>
  isFetchingPopular: boolean
}

const initialState: EventState = {
  events: [],
  popularEvents: {},
  eventsFetching: {},
  isFetchingPopular: false,
}

export default function eventDataReducer(
  state: EventState = initialState,
  action: any
) {
  switch (action.type) {
    case EVENT_FETCH_POPULAR_START:
      return { ...state, isFetchingPopular: true }

    case EVENT_FETCH_POPULAR_FINISH: {
      const { cat, value } = action.data
      return {
        ...state,
        isFetchingPopular: false,
        popularEvents: { ...state.popularEvents, [cat]: value },
      }
    }

    case EVENT_FETCH_START: {
      const { id } = action.data
      return {
        ...state,
        eventsFetching: {
          ...state.eventsFetching,
          [id]: true,
        },
      }
    }

    case EVENT_FETCH_FINISH: {
      const { id, value } = action.data
      return {
        ...state,
        eventsFetching: {
          ...state.eventsFetching,
          [id]: false,
        },
        events: {
          ...state.events,
          [id]: value,
        },
      }
    }
  }
}
