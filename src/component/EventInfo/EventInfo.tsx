import React from 'react'
import { Descriptions } from 'antd'

const DEFAULT_NO_DATA = 'NO DATA'

const EventInfo: React.FC<EventData> = ({
  name = DEFAULT_NO_DATA,
  description = DEFAULT_NO_DATA,
  start_date = DEFAULT_NO_DATA,
  end_date = DEFAULT_NO_DATA,
  type = DEFAULT_NO_DATA,
  state = DEFAULT_NO_DATA,
  short_name = DEFAULT_NO_DATA,
}) => {
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
