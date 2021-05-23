const { createProxyMiddleware } = require('http-proxy-middleware')

const isMockAPI = process.env.MOCK

// if isMockApi is true, then it will always response the static data
// since I can't get the real response from vietname (being blocked by Cloudflare)

module.exports = function (app) {
  app.use(
    '/v3',
    isMockAPI
      ? (req, res) => {
          const { url } = req
          console.log('====', url)
          if (url.indexOf('/popular/event_ids/sport/') === 0) {
            // get popular event id of sport category
            res.writeHead(200, {
              'Content-Type': 'text/json',
            })
            const sport = url
              .replace('/popular/event_ids/sport/', '')
              .replace('/', '')
            return res.end(JSON.stringify(sportPopularEvent[sport]))
          }
          if (url.indexOf('/events/') === 0) {
            // get event details
            res.writeHead(200, {
              'Content-Type': 'text/json',
            })
            const eventId = parseInt(
              url.replace('/events/', '').replace('/', ''),
              10
            )
            return res.end(JSON.stringify(eventStaticData[eventId]))
          }
        }
      : createProxyMiddleware({
          target: 'http://api.smarkets.com',
          changeOrigin: true,
        })
  )
}

// STATIC DATA IS HERE
const sportPopularEvent = {
  football: {
    popular_event_ids: [
      '42216261',
      '42216260',
      '42216265',
      '42216262',
      '42216259',
    ],
  },
  motorsports: {
    popular_event_ids: ['42207399', '42217660', '42221901', '42218861'],
  },
  cycling: { popular_event_ids: ['41875306', '42100176', '42223342'] },
  'horse-racing': {
    popular_event_ids: [
      '42221689',
      '42221686',
      '42221675',
      '42221687',
      '42221681',
    ],
  },
}

const eventStaticData = {
  // prettier-ignore
  42216261: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-17T02:00:39.229488Z", "description": null, "display_order": 0, "end_date": null, "full_slug": "/sport/football/england-premier-league/2021/05/23/15-00/liverpool-vs-crystal-palace", "hidden": false, "id": "42216261", "inplay_enabled": true, "modified": "2021-05-19T17:03:56.501605Z", "name": "Liverpool vs Crystal Palace", "parent_id": "25508311", "seo_description": null, "short_name": "LIV vs. CRY", "slug": "liverpool-vs-crystal-palace", "special_rules": null, "start_date": "2021-05-23", "start_datetime": "2021-05-23T15:00:00Z", "state": "upcoming", "type": "football_match"}]},
  // prettier-ignore
  42216260: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-17T02:00:39.186895Z", "description": null, "display_order": 0, "end_date": null, "full_slug": "/sport/football/england-premier-league/2021/05/23/15-00/leicester-city-vs-tottenham-hotspur", "hidden": false, "id": "42216260", "inplay_enabled": true, "modified": "2021-05-17T02:20:44.496668Z", "name": "Leicester City vs Tottenham Hotspur", "parent_id": "25508311", "seo_description": null, "short_name": "LEI vs. TOT", "slug": "leicester-city-vs-tottenham-hotspur", "special_rules": null, "start_date": "2021-05-23", "start_datetime": "2021-05-23T15:00:00Z", "state": "upcoming", "type": "football_match"}]},
  // prettier-ignore
  42216265: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-17T02:00:41.360242Z", "description": null, "display_order": 0, "end_date": null, "full_slug": "/sport/football/england-premier-league/2021/05/23/15-00/wolverhampton-wanderers-vs-manchester-united", "hidden": false, "id": "42216265", "inplay_enabled": true, "modified": "2021-05-19T16:05:21.778452Z", "name": "Wolverhampton vs Manchester United", "parent_id": "25508311", "seo_description": null, "short_name": "WOL vs. MAN", "slug": "wolverhampton-wanderers-vs-manchester-united", "special_rules": null, "start_date": "2021-05-23", "start_datetime": "2021-05-23T15:00:00Z", "state": "upcoming", "type": "football_match"}]},
  // prettier-ignore
  42216262: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-17T02:00:39.362111Z", "description": null, "display_order": 0, "end_date": null, "full_slug": "/sport/football/england-premier-league/2021/05/23/15-00/manchester-city-vs-everton", "hidden": false, "id": "42216262", "inplay_enabled": true, "modified": "2021-05-17T02:20:44.496668Z", "name": "Manchester City vs Everton", "parent_id": "25508311", "seo_description": null, "short_name": "MAN vs. EVE", "slug": "manchester-city-vs-everton", "special_rules": null, "start_date": "2021-05-23", "start_datetime": "2021-05-23T15:00:00Z", "state": "upcoming", "type": "football_match"}]},
  // prettier-ignore
  42216259: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-17T02:00:39.144171Z", "description": null, "display_order": 0, "end_date": null, "full_slug": "/sport/football/england-premier-league/2021/05/23/15-00/leeds-united-vs-west-bromwich-albion", "hidden": false, "id": "42216259", "inplay_enabled": true, "modified": "2021-05-19T18:21:20.789549Z", "name": "Leeds United vs West Bromwich Albion", "parent_id": "25508311", "seo_description": null, "short_name": "LEE vs. WES", "slug": "leeds-united-vs-west-bromwich-albion", "special_rules": null, "start_date": "2021-05-23", "start_datetime": "2021-05-23T15:00:00Z", "state": "upcoming", "type": "football_match"}]},
  // prettier-ignore
  42207399: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-10T04:40:32.562973Z", "description": "", "display_order": 0, "end_date": null, "full_slug": "/sport/motorsports/formula-1/2021/05/23/13-00/f1-race-grand-prix-de-monaco-2021", "hidden": false, "id": "42207399", "inplay_enabled": true, "modified": "2021-05-23T13:00:39.332958Z", "name": "F1 Race - Monaco Grand Prix 2021", "parent_id": "42201249", "seo_description": null, "short_name": null, "slug": "race", "special_rules": "", "start_date": "2021-05-23", "start_datetime": "2021-05-23T13:00:00Z", "state": "live", "type": "motorsports_race"}]},
  // prettier-ignore
  42217660: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-18T06:21:14.187673Z", "description": "", "display_order": 0, "end_date": null, "full_slug": "/sport/motorsports/nascar/2021/05/23/18-30/austin-nascar-cup-series", "hidden": false, "id": "42217660", "inplay_enabled": true, "modified": "2021-05-23T07:47:11.235980Z", "name": "Austin - NASCAR Cup Series", "parent_id": "42201248", "seo_description": null, "short_name": null, "slug": "austin", "special_rules": "", "start_date": "2021-05-23", "start_datetime": "2021-05-23T18:30:00Z", "state": "upcoming", "type": "motorsports_race"}]},
  // prettier-ignore
  42221901: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-21T11:31:19.537260Z", "description": null, "display_order": 0, "end_date": null, "full_slug": "/sport/motorsports/indycar/2021/05/22/16-00/qualification-indianapolis-500", "hidden": false, "id": "42221901", "inplay_enabled": true, "modified": "2021-05-23T09:30:34.081331Z", "name": "Qualification - Indianapolis 500", "parent_id": "42199950", "seo_description": null, "short_name": null, "slug": "qualification-indianapolis-500", "special_rules": null, "start_date": "2021-05-22", "start_datetime": "2021-05-22T16:00:00Z", "state": "live", "type": "motorsports_race"}]},
  // prettier-ignore
  42218861: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-19T07:03:18.424874Z", "description": "", "display_order": 0, "end_date": null, "full_slug": "/sport/motorsports/rally/2021/05/21/07-00/rally-de-portugal-world-rally-championship-2021", "hidden": false, "id": "42218861", "inplay_enabled": true, "modified": "2021-05-21T07:00:10.368209Z", "name": "Rally de Portugal - World Rally Championship 2021", "parent_id": "42218859", "seo_description": null, "short_name": null, "slug": "rally-de-portugal", "special_rules": "", "start_date": "2021-05-21", "start_datetime": "2021-05-21T07:00:00Z", "state": "live", "type": "motorsports_race"}]},
  // prettier-ignore
  41875306: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2020-09-30T10:33:24.397004Z", "description": "", "display_order": 0, "end_date": null, "full_slug": "/sport/cycling/tour-de-france/2021/06/26/00-00/tour-de-france", "hidden": false, "id": "41875306", "inplay_enabled": true, "modified": "2021-05-22T20:03:06.938489Z", "name": "Tour de France", "parent_id": "741990", "seo_description": null, "short_name": null, "slug": "tour-de-france", "special_rules": "", "start_date": "2021-06-26", "start_datetime": "2021-06-26T00:00:00Z", "state": "upcoming", "type": "generic"}]},
  // prettier-ignore
  42100176: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-03-01T12:04:08.834819Z", "description": "", "display_order": 0, "end_date": null, "full_slug": "/sport/cycling/giro-d-italia/2021/05/08/12-00/giro-d-italia", "hidden": false, "id": "42100176", "inplay_enabled": true, "modified": "2021-05-23T10:15:34.102790Z", "name": "Outright - Giro d'Italia", "parent_id": "41728114", "seo_description": null, "short_name": null, "slug": "giro-d-italia", "special_rules": "", "start_date": "2021-05-08", "start_datetime": "2021-05-08T12:00:00Z", "state": "live", "type": "generic"}]},
  // prettier-ignore
  42223342: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-22T18:16:07.053968Z", "description": null, "display_order": 0, "end_date": null, "full_slug": "/sport/cycling/giro-d-italia/2021/05/23/11-20/stage-15-giro-d-italia", "hidden": false, "id": "42223342", "inplay_enabled": true, "modified": "2021-05-23T11:20:29.800184Z", "name": "Stage 15 - Giro d'Italia", "parent_id": "41728114", "seo_description": null, "short_name": null, "slug": "stage-15-giro-d-italia", "special_rules": null, "start_date": "2021-05-23", "start_datetime": "2021-05-23T11:20:00Z", "state": "live", "type": "generic"}]},
  // prettier-ignore
  42221689: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-21T09:57:58.746936Z", "description": "1 mile Flat", "display_order": 0, "end_date": null, "full_slug": "/sport/horse-racing/curragh/2021/05/23/15-15", "hidden": false, "id": "42221689", "inplay_enabled": true, "modified": "2021-05-23T12:42:22.661120Z", "name": "15:15", "parent_id": "170417", "seo_description": null, "short_name": "15:15 @ Curragh", "slug": "15-15", "special_rules": null, "start_date": "2021-05-23", "start_datetime": "2021-05-23T14:15:00Z", "state": "upcoming", "type": "horse_racing_race"}]},
  // prettier-ignore
  42221686: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-21T09:57:58.727295Z", "description": "1 mile 2 furlongs Flat", "display_order": 0, "end_date": null, "full_slug": "/sport/horse-racing/curragh/2021/05/23/14-05", "hidden": false, "id": "42221686", "inplay_enabled": true, "modified": "2021-05-23T13:08:26.894312Z", "name": "14:05", "parent_id": "170417", "seo_description": null, "short_name": "14:05 @ Curragh", "slug": "14-05", "special_rules": null, "start_date": "2021-05-23", "start_datetime": "2021-05-23T13:05:00Z", "state": "ended", "type": "horse_racing_race"}]},
  // prettier-ignore
  42221675: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-21T09:52:55.955765Z", "description": "1 mile 75 yards Flat Handicap", "display_order": 0, "end_date": null, "full_slug": "/sport/horse-racing/nottingham/2021/05/23/14-55", "hidden": false, "id": "42221675", "inplay_enabled": true, "modified": "2021-05-23T07:10:54.670610Z", "name": "14:55", "parent_id": "178235", "seo_description": null, "short_name": "14:55 @ Nottingham", "slug": "14-55", "special_rules": null, "start_date": "2021-05-23", "start_datetime": "2021-05-23T13:55:00Z", "state": "upcoming", "type": "horse_racing_race"}]},
  // prettier-ignore
  42221687: {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-21T09:57:58.740015Z", "description": "1 mile 2 furlongs 110 yards Flat", "display_order": 0, "end_date": null, "full_slug": "/sport/horse-racing/curragh/2021/05/23/14-40", "hidden": false, "id": "42221687", "inplay_enabled": true, "modified": "2021-05-23T12:42:24.680180Z", "name": "14:40", "parent_id": "170417", "seo_description": null, "short_name": "14:40 @ Curragh", "slug": "14-40", "special_rules": null, "start_date": "2021-05-23", "start_datetime": "2021-05-23T13:40:00Z", "state": "upcoming", "type": "horse_racing_race"}]},
  // prettier-ignore
  42221681:   {"events": [{"bet_allowed": true, "bettable": true, "chart_time_period": null, "created": "2021-05-21T09:53:55.458094Z", "description": "2 miles 7 furlongs 95 yards Hurdle Handicap", "display_order": 0, "end_date": null, "full_slug": "/sport/horse-racing/fakenham/2021/05/23/13-55", "hidden": false, "id": "42221681", "inplay_enabled": true, "modified": "2021-05-23T13:07:04.612442Z", "name": "13:55", "parent_id": "153253", "seo_description": null, "short_name": "13:55 @ Fakenham", "slug": "13-55", "special_rules": null, "start_date": "2021-05-23", "start_datetime": "2021-05-23T12:55:00Z", "state": "ended", "type": "horse_racing_race"}]},
}
