import axios from 'axios'
import * as api from '../../api'

export function fetchPopularEvents(cat: string) {
  return async (dispatch) => {
    dispatch({ type: 'EVENT_FETCH_POPULAR_START' })

    const response = await axios.get(api.getPopularEventsByCat(cat))

    dispatch({
      type: 'EVENT_FETCH_POPULAR_FINISH',
      data: {
        cat,
        value: response.data.popular_event_ids,
      },
    })
  }
}
