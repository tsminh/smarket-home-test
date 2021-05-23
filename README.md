### Overview

1. Popular events page:
   ![first visit](./docs/img1.png)

Sidebar: Sport categories, I made them hard-coded category for: Football, Motosport, Cycle and Horse racing. We can modify this in the code (simply add more into an array)

When click on event, it will direct you to event detail page.

2. Event detail page:
   ![event detail](./docs/img2.png)

In here I display some basic information such as short name, start date, end date, type, state ...

### How to test

- Clone the project
- Run `npm i` to install module
- There are many ways to try:
  - Run `npm run start` to start the project with HttpProxyServer (to bypass CORS)
  - Run `npm run start:mock-api` to start the project with static response api (to prevent using real api, will be blocked by CloudFlare) --- Maybe you need to do `npm i -g cross-env` too.

### Project structure

#### Main project structure under /src

- [api/](.\src\api) : keep information about api call
- [component/](.\src\component) : UI component that is reusabled
- [page/](.\src\page)
  - [EventDetail/](.\src\page\EventDetail)
  - [PopularEvents/](.\src\page\PopularEvents)
- [reducer/](.\src\reducer)
  - [events/](.\src\reducer\events) : keep information about action, reducer for events

#### Data management

After checking api doc, I understand that I will use 2 apis:

- Get popular events: sadly this just returns event's id.
- Get event information

Below is how I manage data, so no need to call the same api to get the same data everytime.

![](./docs/img3.png)

- Case 1: User goes to /events/<id>: check if there is any data for that event's id, if YES, serve it ! Otherwise, call api and store it into store.
- Case 2 : User goes to /sport/<sport_category>: call api to get popular events ID first. For each event's id, call api to get event's information (always get the latest)
- There should be something like cache mechanism, but I think no need for now.

#### QA

- How to add more category?
  > Can put more pair <key, name> of a category to SIDE_BAR_SPORTS in `/src/App.tsx`

### Dependencies

In this project I using mainly:

- `redux` + `redux-thunk`
- `react-router-dom`
- `antd`
