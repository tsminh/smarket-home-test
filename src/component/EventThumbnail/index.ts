import EventThumbnail from './EventThumbnail'
import { connect } from 'react-redux'
import { EventState } from '../../reducer/events/eventReducer'

function mapStateToProps(state: EventState, props: any) {
  const { id } = props
  const { eventsFetching, events } = state

  return {
    loading: eventsFetching[id],
    info: events[id],
  }
}

export default connect(mapStateToProps, null)(EventThumbnail)
