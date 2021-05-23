import EventInfo from './EventInfo'
import { connect } from 'react-redux'
import { EventState } from '../../reducer/events/eventReducer'

function mapStateToProps(state: EventState, props: any) {
  const { id } = props
  const { events } = state

  return {
    ...events[id],
  }
}

export default connect(mapStateToProps, null)(EventInfo)
