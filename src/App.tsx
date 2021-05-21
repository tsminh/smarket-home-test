import React from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import styles from './index.module.scss'

const { Content, Sider } = Layout

// This is the sidebar menu
// each element contains its key and name
const SIDE_BAR_SPORTS = [
  {
    key: 'football',
    name: 'Football',
  },
  {
    key: 'motorsports',
    name: 'Motorsports',
  },
  {
    key: 'cycling',
    name: 'Cycling',
  },
  {
    key: 'horse-racing',
    name: 'Horse Racing',
  },
]

const App = () => {
  const history = useHistory()

  return (
    <Layout className={styles['main-app']}>
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          onClick={({ key }) => history.push(`/sport/${key}`)}
        >
          {SIDE_BAR_SPORTS.map((sport) => (
            <Menu.Item key={sport.key}>{sport.name}</Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content className={styles['content']}>
          <Switch>
            <Route path="/sport/:tab">123</Route>
            <Route path="/event/:id">123</Route>
            <Redirect to={`/sport/${SIDE_BAR_SPORTS[0].key}`} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
