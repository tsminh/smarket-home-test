import { Spin } from 'antd'
import React from 'react'
import styles from './eventThumbnail.module.scss'
interface EventThumbnailProps {
  loading?: boolean
  name?: string
}

const EventThumbnail: React.FC<EventThumbnailProps> = ({ name, loading }) => {
  return (
    <div className={styles['event-thumb']}>
      {loading ? <Spin /> : <div>{name}</div>}
      {/* api to get random image */}
      <img src="https://picsum.photos/300/200/?blur=10" />
    </div>
  )
}

export default EventThumbnail
