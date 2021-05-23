import { Button } from 'antd'
import { useHistory, useRouteMatch } from 'react-router'
import EventInfo from '../../component/EventInfo'

interface PopularEventsProps {
  info?: EventData
}

const EventDetail: React.FC<PopularEventsProps> = () => {
  const match = useRouteMatch('/event/:id') as any
  const history = useHistory()

  if (!match) {
    return <div>404</div>
  }

  return (
    <div>
      <Button style={{ marginBottom: 16 }} onClick={() => history.goBack()}>
        Back
      </Button>
      <EventInfo id={match.params?.id} />
    </div>
  )
}

export default EventDetail
