import { Spin } from 'antd'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { EventState } from '../../reducer/events/eventReducer'
import { fetchPopularEvents } from '../../reducer/events/actions'
import { useEffect } from 'react'
import EventThumbnail from '../../component/EventThumbnail'
import { Link } from 'react-router-dom'

interface PopularEventsProps {
  isFetching?: boolean
  eventIds?: number[]
  actions?: any
  cat: string
}

const PopularEvents: React.FC<PopularEventsProps> = ({
  isFetching,
  eventIds,
  actions: { fetchPopularEvents },
  cat,
}) => {
  useEffect(() => {
    fetchPopularEvents(cat)
  }, [cat, fetchPopularEvents])

  if (isFetching) return <Spin />
  return (
    <div>
      <h2>Popular events:</h2>
      <div>
        {eventIds?.map((e) => (
          <Link to={`/event/${e}`} key={e}>
            <EventThumbnail id={e} />
          </Link>
        ))}
      </div>
    </div>
  )
}

function mapStateToProps(state: EventState, props: PopularEventsProps) {
  const { cat } = props
  const { isFetchingPopular: isFetching, popularEvents } = state
  const eventIds = popularEvents[cat]
  return {
    ...props,
    isFetching,
    eventIds,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators({ fetchPopularEvents }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularEvents)
