import axios from 'axios'
import { Dispatch } from 'redux'
import * as api from '../../api'
import { EVENT_FETCH_FINISH, EVENT_FETCH_START } from './constants'

export function fetchPopularEvents(cat: string) {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'EVENT_FETCH_POPULAR_START' })

    const response = await axios.get(api.getPopularEventsByCat(cat))
    const { popular_event_ids } = response.data as {
      popular_event_ids: number[]
    }
    dispatch({
      type: 'EVENT_FETCH_POPULAR_FINISH',
      data: {
        cat,
        value: popular_event_ids,
      },
    })

    popular_event_ids.forEach(async (id) => {
      dispatch({
        type: EVENT_FETCH_START,
        data: { id },
      })

      const eventData = await axios.get(api.getEventDetail(id))

      dispatch({
        type: EVENT_FETCH_FINISH,
        data: { id, value: eventData.data.events[0] },
      })
    })
  }
}
