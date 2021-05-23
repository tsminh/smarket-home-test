import React, { useEffect } from 'react'
import { Descriptions } from 'antd'

const DEFAULT_NO_DATA = 'NO DATA'

interface EventInfoProps extends EventData {
  actions: any
  id: number
}

const EventInfo: React.FC<EventInfoProps> = ({
  name = DEFAULT_NO_DATA,
  description = DEFAULT_NO_DATA,
  start_date = DEFAULT_NO_DATA,
  end_date = DEFAULT_NO_DATA,
  type = DEFAULT_NO_DATA,
  state = DEFAULT_NO_DATA,
  short_name = DEFAULT_NO_DATA,
  actions: { fetchEventInfo },
  id,
}) => {
  useEffect(() => {
    if (name === DEFAULT_NO_DATA) {
      fetchEventInfo(id)
    }
  }, [fetchEventInfo, name, id])

  return (
    <div>
      <Descriptions title={name}>
        <Descriptions.Item label="Shortname">{short_name}</Descriptions.Item>
        <Descriptions.Item label="Description">{description}</Descriptions.Item>
        <Descriptions.Item label="Start date">
          {start_date || DEFAULT_NO_DATA}
        </Descriptions.Item>
        <Descriptions.Item label="End date">
          {end_date || DEFAULT_NO_DATA}
        </Descriptions.Item>
        <Descriptions.Item label="Type">{type}</Descriptions.Item>
        <Descriptions.Item label="State">{state}</Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default EventInfo
