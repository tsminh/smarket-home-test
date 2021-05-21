interface EventState {
    events: EventData[]
    eventsFetching: Record<number, boolean>
}

const initialState:EventState = {
    events: [],
    eventsFetching: {}
}

export default function eventDataReducer(state = initialState, action: any) {
    switch (action.type) {
        
    }
}