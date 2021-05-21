import eventDataReducer from './events/eventReducer'

// currently rootReducer is just eventDataReducer
// we can add more reducers by combineReducer when expand our features
const rootReducer = eventDataReducer

export default rootReducer
