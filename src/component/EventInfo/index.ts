import EventInfo from './EventInfo'
import { connect } from 'react-redux'
import { EventState } from '../../reducer/events/eventReducer'
import { bindActionCreators } from 'redux'
import { fetchEventInfo } from '../../reducer/events/actions'

function mapStateToProps(state: EventState, props: any) {
  const { id } = props
  const { events } = state

  return {
    ...events[id],
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators({ fetchEventInfo }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInfo)
