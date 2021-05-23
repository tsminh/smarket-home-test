import { Spin } from 'antd'
import React from 'react'
import styles from './eventThumbnail.module.scss'
interface EventThumbnailProps {
  loading?: boolean
  info?: EventData
  id?: number
}

const EventThumbnail: React.FC<EventThumbnailProps> = ({
  info: { name } = {},
  loading,
  id = 0,
}) => {
  return (
    <div className={styles['event-thumb']}>
      {/* api to get random image */}
      <img alt="" src={`https://picsum.photos/seed/${id}/300/200/?blur=10`} />
      {loading ? <Spin /> : <span className={styles['info']}>{name}</span>}
    </div>
  )
}

export default EventThumbnail
