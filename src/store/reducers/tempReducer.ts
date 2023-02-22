
import { SetTempAction, SET_TEMP, TempState } from "../types";
const initialState: TempState = { temp: 'celsius' }

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SetTempAction): TempState => {
    switch (action.type) {
        case SET_TEMP:
            return { temp: action.payload }
        default:
            return state;
    }
}